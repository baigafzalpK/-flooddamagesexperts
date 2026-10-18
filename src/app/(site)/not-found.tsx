import Link from "next/link";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="container-x max-w-2xl py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-pine">
        This wall is blank.
      </h1>
      <p className="mt-4 text-lg text-pine/70">
        The page you&apos;re looking for doesn&apos;t exist — but a fresh coat
        of options is right here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href={routes.home()} className="btn-primary">
          Back to home
        </Link>
        <Link href={routes.services()} className="btn-secondary">
          Browse services
        </Link>
      </div>
    </div>
  );
}
