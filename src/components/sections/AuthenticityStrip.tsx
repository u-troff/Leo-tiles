import Image from "next/image";

export default function AuthenticityStrip() {
  return (
    <section className="grid lg:grid-cols-[1.3fr_1fr] items-center bg-stone-100">
      <div className="px-6 lg:px-16 py-14 lg:py-[70px]">
        <p className="text-clay-900 text-2xl lg:text-[29px] font-medium leading-snug max-w-xl">
          Handmade in Cape Town since 1975 — every tile mixed, pressed and shaped by hand before it
          ever sees the kiln.
        </p>
      </div>
      <div className="relative h-[220px] lg:h-[320px]">
        <Image
          src="/images/design/stacked-tiles.jpg"
          alt="Close-up of stacked handmade terracotta tiles"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
