import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { SpecialtyDetail } from "@/features/specialties/specialty-detail";
import {
  getSpecialtyBySlug,
  specialties,
} from "@/features/specialties/specialties-data";

interface SpecialtyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return specialties.map((specialty) => ({
    slug: specialty.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: SpecialtyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    return {
      title: "Specialty Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/specialties/${specialty.slug}`;
  const url = `${siteConfig.url.replace(/\/$/, "")}${canonical}`;

  return {
    title: specialty.title,

    description: specialty.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: `${specialty.title} | claryden rcm`,
      description: specialty.heroDescription,
      url,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${specialty.title} | claryden rcm`,
      description: specialty.heroDescription,
    },
  };
}

export default async function SpecialtyPage({
  params,
}: SpecialtyPageProps) {
  const { slug } = await params;

  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  return <SpecialtyDetail specialty={specialty} />;
}