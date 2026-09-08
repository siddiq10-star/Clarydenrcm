import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ServiceDetail } from "@/features/services/service-detail";
import {
  getServiceBySlug,
  services,
} from "@/features/services/services-data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/services/${service.slug}`;

  return {
    title: service.title,

    description: service.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: `${service.title} | Kinz HealthOps`,

      description:
        service.heroDescription,

      url: `${siteConfig.url}${canonical}`,

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: `${service.title} | Kinz HealthOps`,

      description:
        service.heroDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetail service={service} />
  );
}