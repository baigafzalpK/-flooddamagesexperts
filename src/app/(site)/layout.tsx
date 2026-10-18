import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* data-home: skip content-visibility deferral on homepage (playbook B14) */}
      {children}
      <Footer />
    </>
  );
}
