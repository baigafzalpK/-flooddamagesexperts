/**
 * Navigation structure for header mega menus, mobile drawer and footer.
 */
import { routes } from "@/lib/routes";
import {
  serviceCategories,
  servicesByCategory,
  regions,
  allCities,
  cityLabel,
} from "@/content";

export interface NavServiceGroup {
  category: string;
  categoryPath: string;
  links: { name: string; href: string }[];
}

export function serviceNavGroups(): NavServiceGroup[] {
  return serviceCategories.map((cat) => ({
    category: cat.name,
    categoryPath: `${routes.services()}#${cat.slug}`,
    links: servicesByCategory(cat.slug).map((s) => ({
      name: s.name,
      href: routes.service(s.slug),
    })),
  }));
}

export interface NavRegion {
  name: string;
  links: { name: string; href: string }[];
}

export function locationNavRegions(): NavRegion[] {
  return regions.map((r) => ({
    name: r.name,
    links: r.citySlugs
      .map((slug) => allCities.find((c) => c.slug === slug))
      .filter((c): c is (typeof allCities)[number] => !!c)
      .map((c) => ({
        name: cityLabel(c).split(",")[0],
        href: routes.city("texas", c.slug),
      })),
  }));
}

export const companyLinks = [
  { name: "About", href: routes.about() },
  { name: "Contact", href: routes.contact() },
  { name: "FAQ", href: routes.faq() },
  { name: "Guides & resources", href: routes.resources() },
  { name: "Videos", href: routes.videos() },
  { name: "Privacy", href: routes.privacy() },
  { name: "Terms", href: routes.terms() },
  { name: "Accessibility", href: routes.accessibility() },
];
