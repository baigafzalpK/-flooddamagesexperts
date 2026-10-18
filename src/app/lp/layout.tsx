import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, DISCLOSURE } from "@/content/site";
import { routes } from "@/lib/routes";

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-white">
        <div className="container-x flex items-center justify-between py-3">
          <Link href={routes.home()} aria-label="BayouDry Restoration — home">
            <Logo className="h-10 w-auto" />
          </Link>
          <a href={`tel:${site.phoneE164}`} className="btn-primary !min-h-[44px] !text-sm">
            Call {site.phoneDisplay}
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-line bg-white">
        <div className="container-x py-6 text-xs leading-relaxed text-pine/55">
          <p>{DISCLOSURE}</p>
          <p className="mt-2">© 2026 {site.name}</p>
        </div>
      </footer>
    </div>
  );
}
