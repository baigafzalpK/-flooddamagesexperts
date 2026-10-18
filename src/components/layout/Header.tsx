"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Logo } from "../Logo";
import { PhoneLink } from "../PhoneLink";
import { IconMenu, IconX, IconChevronDown, IconMapPin, IconPhone } from "../icons";
import { routes } from "@/lib/routes";
import { site, BRAND_PROMISE } from "@/content/site";
import { serviceNavGroups, locationNavRegions, companyLinks } from "./nav";

function useHoverIntent(delayOpen = 90, delayClose = 160) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };
  const open = (name: string) => {
    clear();
    timer.current = setTimeout(() => setOpenMenu(name), delayOpen);
  };
  const close = () => {
    clear();
    timer.current = setTimeout(() => setOpenMenu(null), delayClose);
  };
  const closeNow = () => {
    clear();
    setOpenMenu(null);
  };
  useEffect(() => clear, []);
  return { openMenu, open, close, closeNow, setOpenMenu };
}

function MegaPanel({
  id,
  labelledBy,
  onClose,
  children,
}: {
  id: string;
  labelledBy: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className="absolute inset-x-0 top-full z-40 border-t border-line bg-white shadow-xl"
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <div className="container-x grid grid-cols-4 gap-8 py-8" onMouseLeave={onClose}>
        {children}
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { openMenu, open, close, closeNow, setOpenMenu } = useHoverIntent();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Gate the document.body portal until after hydration — rendering it
  // during SSR would mismatch the server HTML (document is undefined there).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeNow();
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeNow]);

  // Body scroll lock for drawer
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const serviceGroups = serviceNavGroups();
  const locRegions = locationNavRegions();

  const navLink = (href: string, label: string, menu?: string) => {
    const active =
      menu === "services"
        ? pathname?.startsWith("/water-damage-services")
        : menu === "locations"
          ? pathname?.startsWith("/locations")
          : pathname === href;
    return (
      <div
        key={label}
        onMouseEnter={() => (menu ? open(menu) : closeNow())}
        onMouseLeave={() => menu && close()}
      >
        {menu ? (
          <button
            id={`nav-${menu}`}
            aria-expanded={openMenu === menu}
            aria-controls={`panel-${menu}`}
            onClick={() =>
              setOpenMenu(openMenu === menu ? null : (menu as string))
            }
            className={`relative flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-colors ${
              active || openMenu === menu ? "text-lagoon-deep" : "text-pine hover:text-lagoon-deep"
            }`}
          >
            {label}
            <IconChevronDown
              className={`h-4 w-4 transition-transform ${openMenu === menu ? "rotate-180" : ""}`}
            />
            <span
              className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-coral transition-opacity ${
                active || openMenu === menu ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ) : (
          <Link
            href={href}
            aria-current={active ? "page" : undefined}
            onClick={closeNow}
            className={`relative block px-3 py-2 text-[15px] font-semibold transition-colors ${
              active ? "text-lagoon-deep" : "text-pine hover:text-lagoon-deep"
            }`}
          >
            {label}
            <span
              className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-coral transition-opacity ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Utility bar (not sticky) */}
      <div className="bg-pine-deep text-white/85">
        <div className="container-x flex items-center justify-between gap-4 py-1.5 text-[13px]">
          <span className="flex items-center gap-1.5">
            <IconMapPin className="h-3.5 w-3.5 text-coral" />
            Serving Greater Houston
          </span>
          <span className="hidden sm:block">{BRAND_PROMISE}</span>
        </div>
      </div>

      {/* Sticky header shell */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="container-x relative flex items-center py-3">
          <Link href={routes.home()} aria-label="BayouDry Restoration — home" onClick={closeNow}>
            <Logo className="h-11 w-auto" />
          </Link>

          {/* Desktop nav — 48–56px gap after logo */}
          <nav aria-label="Primary" className="ml-8 hidden items-center lg:ml-10 lg:flex 2xl:ml-14">
            {navLink(routes.home(), "Home")}
            {navLink(routes.services(), "Services", "services")}
            {navLink(routes.locations(), "Service areas", "locations")}
            {navLink(routes.resources(), "Guides")}
            {navLink(routes.videos(), "Videos")}
            <span className="hidden xl:block">{navLink(routes.contact(), "Contact")}</span>
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <PhoneLink className="hidden items-center gap-2 rounded-md px-3 py-2 font-bold text-pine hover:bg-paper-deep md:inline-flex" />
            <Link
              href={routes.requestService()}
              onClick={() => {
                closeNow();
              }}
              className="btn-primary hidden !min-h-[44px] !px-5 !text-[15px] sm:inline-flex"
            >
              Get help now
            </Link>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-pine hover:bg-paper-deep lg:hidden"
              aria-expanded={drawerOpen}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              {drawerOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mega menus */}
          {openMenu === "services" && (
            <MegaPanel id="panel-services" labelledBy="nav-services" onClose={close}>
              <div className="rounded-2xl bg-pine p-6 text-white">
                <p className="eyebrow-light">When every minute matters</p>
                <p className="mt-2 font-serif text-xl font-semibold">
                  Water cleanup, day or night
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Standing water can&apos;t wait. Tell us what happened and
                  we&apos;ll connect you with a local restoration contractor.
                </p>
                <Link
                  href={routes.service("unattended-death-cleanup")}
                  onClick={closeNow}
                  className="btn-primary mt-4 !min-h-[44px] !text-sm"
                >
                  Unattended death cleanup
                </Link>
              </div>
              {serviceGroups.map((g) => (
                <div key={g.category}>
                  <Link
                    href={g.categoryPath}
                    onClick={closeNow}
                    className="font-serif text-base font-semibold text-pine hover:text-lagoon-deep"
                  >
                    {g.category}
                  </Link>
                  <ul className="mt-3 space-y-2">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={closeNow}
                          className="text-[15px] text-pine/75 hover:text-lagoon-deep hover:underline"
                        >
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </MegaPanel>
          )}
          {openMenu === "locations" && (
            <MegaPanel id="panel-locations" labelledBy="nav-locations" onClose={close}>
              <div className="rounded-2xl bg-pine p-6 text-white">
                <p className="eyebrow-light">Where we connect you</p>
                <p className="mt-2 font-serif text-xl font-semibold">
                  16 cities across Greater Houston
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Houston, Pasadena, Sugar Land and beyond — independent licensed
                  restoration contractors in every city.
                </p>
                <Link
                  href={routes.locations()}
                  onClick={closeNow}
                  className="btn-primary mt-4 !min-h-[44px] !text-sm"
                >
                  All service areas
                </Link>
              </div>
              {locRegions.map((r) => (
                <div key={r.name}>
                  <p className="font-serif text-base font-semibold text-pine">{r.name}</p>
                  <ul className="mt-3 grid grid-cols-1 gap-2">
                    {r.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={closeNow}
                          className="text-[15px] text-pine/75 hover:text-lagoon-deep hover:underline"
                        >
                          {l.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </MegaPanel>
          )}
        </div>
      </header>

      {/* Mobile drawer via portal (header backdrop-filter traps fixed children) */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[60] lg:hidden ${drawerOpen ? "" : "invisible"}`}
            inert={!drawerOpen}
            aria-hidden={!drawerOpen}
          >
            <div
              className={`absolute inset-0 bg-pine-deep/50 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
              onClick={() => setDrawerOpen(false)}
            />
            <aside
              className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-200 ${
                drawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
              role="dialog"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between border-b border-line p-4">
                <Logo className="h-9 w-auto" />
                <button
                  aria-label="Close menu"
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-paper-deep"
                >
                  <IconX className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile">
                <MobileSection title="Services" links={serviceGroups.flatMap((g) => g.links)} onNav={() => setDrawerOpen(false)} />
                <MobileSection title="Service areas" links={locRegions.flatMap((r) => r.links)} onNav={() => setDrawerOpen(false)} />
                <MobileSection title="Company" links={companyLinks} onNav={() => setDrawerOpen(false)} />
                <a
                  href={`tel:${site.phoneE164}`}
                  className="btn-secondary mt-4 w-full"
                  onClick={() => setDrawerOpen(false)}
                >
                  Call {site.phoneDisplay}
                </a>
              </nav>
              <div className="border-t border-line p-4">
                <Link
                  href={routes.requestService()}
                  className="btn-primary w-full"
                  onClick={() => setDrawerOpen(false)}
                >
                  Request help now
                </Link>
              </div>
            </aside>
          </div>,
          document.body
        )}

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-line lg:hidden">
        <a
          href={`tel:${site.phoneE164}`}
          className="flex items-center justify-center gap-2 bg-pine py-3.5 font-bold text-white"
        >
          <IconPhone className="h-5 w-5" /> Call
        </a>
        <Link
          href={routes.requestService()}
          className="flex items-center justify-center bg-coral py-3.5 font-bold text-pine-deep"
        >
          Get help now
        </Link>
      </div>
    </>
  );
}

function MobileSection({
  title,
  links,
  onNav,
}: {
  title: string;
  links: { name: string; href: string }[];
  onNav: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line py-1">
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 font-serif text-lg font-semibold text-pine"
      >
        {title}
        <IconChevronDown className={`h-5 w-5 text-pine/40 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="grid grid-cols-2 gap-1 pb-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={onNav}
                className="block rounded-md px-2 py-2 text-[15px] text-pine/80 hover:bg-paper-deep"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
