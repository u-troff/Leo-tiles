import QuoteEstimator from "@/components/sections/QuoteEstimator";

export const metadata = {
  title: "Get a Quote | Leo Tiles",
  description: "Estimate the cost of your handmade terracotta tile project and send a quote request to Leo Tiles.",
};

export default function GetAQuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-stone-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-clay-800 mb-4">Get a Quote</h1>
          <p className="text-xl text-stone-600 max-w-2xl">
            Use the estimator below to get a guide price for your project, then send us your details and we&apos;ll confirm exact pricing.
          </p>
        </div>
      </section>
      <QuoteEstimator />
    </>
  );
}
