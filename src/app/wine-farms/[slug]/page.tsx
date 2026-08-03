import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WineFarmDetailView from "@/components/sections/WineFarmDetailView";
import {
  wineFarmDetails,
  getWineFarmDetail,
  getNextWineFarm,
} from "@/data/wine-farms";

export async function generateStaticParams() {
  return wineFarmDetails.map((farm) => ({ slug: farm.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const farm = getWineFarmDetail(slug);
  if (!farm) return {};
  return {
    title: `${farm.fullTitle} — Wine Farm`,
    description: farm.brief,
  };
}

export default async function WineFarmDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const farm = getWineFarmDetail(slug);
  if (!farm) notFound();

  const nextFarm = getNextWineFarm(slug);

  return <WineFarmDetailView farm={farm} nextFarm={nextFarm} />;
}
