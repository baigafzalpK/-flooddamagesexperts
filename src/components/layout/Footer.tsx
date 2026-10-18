import Link from "next/link";
import { Logo } from "../Logo";
import { routes } from "@/lib/routes";
import { site, DISCLOSURE } from "@/content/site";
import { serviceNavGroups, locationNavRegions, companyLinks } from "./nav";
import { IconMapPin } from "../icons";

export function Footer() {
  const serviceGroups = serviceNavGroups();
  const locRegions = locationNavRegions();

  return (
    <footer className="bg-pine-deep text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <IconMapPin className="h-4 w-4 text-coral" />
            {site.market}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneE164}`} className="btn-primary !min-h-[44px] !text-sm">
              Call {site.phoneDisplay}
            </a>
            <Link href={routes.requestService()} className="btn-outline-light !min-h-[44px] !text-sm">
              Request help now
            </Link>
          </div>
        </div>

        <nav aria-label="Services">
          <p className="font-serif text-base font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {serviceGroups.flatMap((g) => g.links).slice(0, 8).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-white hover:underline">
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.services()} className="font-semibold text-coral hover:underline">
                All services
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Service areas">
          <p className="font-serif text-base font-semibold text-white">Service areas</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {locRegions.flatMap((r) => r.links).slice(0, 8).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-white hover:underline">
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.locations()} className="font-semibold text-coral hover:underline">
                All areas
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="font-serif text-base font-semibold text-white">Company</p>
          <ul className="mt-3 space-y-2 text-[15px]">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-white hover:underline">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Disclosure bar — call-brand model */}
      <div className="border-t border-white/15">
        <div className="container-x py-6 text-[13px] leading-relaxed text-white/55">
          <p>{DISCLOSURE}</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 {site.name}. All rights reserved.</span>
            <Link href={routes.privacy()} className="hover:text-white hover:underline">Privacy</Link>
            <Link href={routes.terms()} className="hover:text-white hover:underline">Terms</Link>
            <Link href={routes.accessibility()} className="hover:text-white hover:underline">Accessibility</Link>
          </p>
        </div>
      </div>

      {/* Spacer so the mobile action bar never covers the footer */}
      <div className="h-[60px] lg:hidden" aria-hidden />
    </footer>
  );
}
