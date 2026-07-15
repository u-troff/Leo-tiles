"use client";

import { useMemo, useState } from "react";
import SectionLogo from "@/components/ui/SectionLogo";
import { siteConfig } from "@/data/site-config";

const TILE_PRICE_LOW = 800;
const TILE_PRICE_HIGH = 1200;
const INSTALL_PRICE_LOW = 150;
const INSTALL_PRICE_HIGH = 250;
const WASTAGE_FACTOR = 1.1;
const SEALANT_RATE = 85;
const GROUT_RATE = 45;

const products = ["Batavian Floor Tiles", "Dutch Klompies", "Hexagon Tiles", "Custom Size"];

function formatRand(value: number) {
  return `R${Math.round(value).toLocaleString("en-ZA")}`;
}

export default function QuoteEstimator() {
  const [product, setProduct] = useState(products[0]);
  const [areaMethod, setAreaMethod] = useState<"direct" | "dimensions">("direct");
  const [areaInput, setAreaInput] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [includeInstallation, setIncludeInstallation] = useState(false);
  const [includeSealant, setIncludeSealant] = useState(false);
  const [includeGrout, setIncludeGrout] = useState(false);
  const [photoName, setPhotoName] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const baseArea = useMemo(() => {
    if (areaMethod === "direct") {
      const val = parseFloat(areaInput);
      return Number.isFinite(val) && val > 0 ? val : 0;
    }
    const l = parseFloat(length);
    const w = parseFloat(width);
    return Number.isFinite(l) && Number.isFinite(w) && l > 0 && w > 0 ? l * w : 0;
  }, [areaMethod, areaInput, length, width]);

  const areaWithWastage = baseArea * WASTAGE_FACTOR;

  const tileLow = areaWithWastage * TILE_PRICE_LOW;
  const tileHigh = areaWithWastage * TILE_PRICE_HIGH;

  const installLow = includeInstallation ? areaWithWastage * INSTALL_PRICE_LOW : 0;
  const installHigh = includeInstallation ? areaWithWastage * INSTALL_PRICE_HIGH : 0;

  const sealantCost = includeSealant ? areaWithWastage * SEALANT_RATE : 0;
  const groutCost = includeGrout ? areaWithWastage * GROUT_RATE : 0;

  const totalLow = tileLow + installLow + sealantCost + groutCost;
  const totalHigh = tileHigh + installHigh + sealantCost + groutCost;

  const hasArea = areaWithWastage > 0;

  const defaultMessage = hasArea
    ? `I'd like a quote for approximately ${areaWithWastage.toFixed(1)}m² of ${product}. Estimated range: ${formatRand(totalLow)}–${formatRand(totalHigh)}.`
    : "";

  const effectiveMessage = message || defaultMessage;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Quote Request from leotiles.co.za");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${effectiveMessage}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-stone-100">
      <div className="max-w-5xl mx-auto px-4">
        <SectionLogo label="Quote Estimator" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ── Inputs ──────────────────────────────────── */}
          <div className="bg-white border border-stone-300 p-6 lg:p-8 space-y-6">
            <div>
              <label htmlFor="qe-product" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Product
              </label>
              <select
                id="qe-product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
              >
                {products.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Area Input Method
              </span>
              <div className="inline-flex border border-stone-300 mb-3">
                <button
                  type="button"
                  onClick={() => setAreaMethod("direct")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    areaMethod === "direct" ? "bg-rust-500 text-white" : "text-clay-700 hover:bg-stone-100"
                  }`}
                >
                  Enter m² directly
                </button>
                <button
                  type="button"
                  onClick={() => setAreaMethod("dimensions")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    areaMethod === "dimensions" ? "bg-rust-500 text-white" : "text-clay-700 hover:bg-stone-100"
                  }`}
                >
                  Enter room dimensions
                </button>
              </div>

              {areaMethod === "direct" ? (
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                  placeholder="Area in m²"
                  className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
                />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="Length (m)"
                    className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
                  />
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="Width (m)"
                    className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
                  />
                </div>
              )}
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2.5 text-sm text-clay-800">
                <input
                  type="checkbox"
                  checked={includeInstallation}
                  onChange={(e) => setIncludeInstallation(e.target.checked)}
                  className="w-4 h-4 accent-rust-500"
                />
                Include installation quote
              </label>
              <label className="flex items-center gap-2.5 text-sm text-clay-800">
                <input
                  type="checkbox"
                  checked={includeSealant}
                  onChange={(e) => setIncludeSealant(e.target.checked)}
                  className="w-4 h-4 accent-rust-500"
                />
                Include sealant
              </label>
              <label className="flex items-center gap-2.5 text-sm text-clay-800">
                <input
                  type="checkbox"
                  checked={includeGrout}
                  onChange={(e) => setIncludeGrout(e.target.checked)}
                  className="w-4 h-4 accent-rust-500"
                />
                Include grout
              </label>
            </div>

            <div>
              <label htmlFor="qe-photo" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Upload a photo of your space (optional)
              </label>
              <input
                id="qe-photo"
                type="file"
                accept="image/*"
                onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? "")}
                className="w-full text-sm text-gray-600 file:mr-3 file:px-4 file:py-2 file:border-0 file:bg-rust-500 file:text-white file:text-sm file:font-semibold hover:file:bg-rust-600 file:cursor-pointer"
              />
              {photoName && <p className="text-xs text-gray-500 mt-1">Selected: {photoName}</p>}
              <p className="text-xs text-gray-400 mt-2">
                Attach your photo to the email after clicking &lsquo;Send My Quote Request&rsquo;, or
                WhatsApp it to {siteConfig.phone}.
              </p>
            </div>
          </div>

          {/* ── Output ──────────────────────────────────── */}
          <div className="bg-clay-900 text-white p-6 lg:p-8">
            <h3 className="font-serif text-2xl font-bold mb-6">Your Estimated Quote</h3>

            {!hasArea ? (
              <p className="text-white/60 text-sm">
                Enter an area or room dimensions to see your estimate.
              </p>
            ) : (
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Area (incl. 10% wastage buffer)</span>
                  <span className="font-medium text-white">{areaWithWastage.toFixed(1)} m²</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between">
                  <span>Tiles</span>
                  <span className="font-semibold">{formatRand(tileLow)} – {formatRand(tileHigh)}</span>
                </div>
                {includeInstallation && (
                  <div className="flex justify-between">
                    <span>Installation</span>
                    <span className="font-semibold">{formatRand(installLow)} – {formatRand(installHigh)}</span>
                  </div>
                )}
                {includeSealant && (
                  <div className="flex justify-between">
                    <span>Sealant</span>
                    <span className="font-semibold">{formatRand(sealantCost)}</span>
                  </div>
                )}
                {includeGrout && (
                  <div className="flex justify-between">
                    <span>Grout</span>
                    <span className="font-semibold">{formatRand(groutCost)}</span>
                  </div>
                )}
                <div className="h-px bg-white/10" />
                <div className="flex justify-between text-lg font-bold text-rust-400">
                  <span>Total Range</span>
                  <span>{formatRand(totalLow)} – {formatRand(totalHigh)}</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed pt-2">
                  This is an estimated guide price. Final pricing is confirmed when you contact us
                 , custom sizes, site conditions, and project complexity may affect the final quote.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── Submit Section ─────────────────────────────── */}
        <div className="bg-white border border-stone-300 p-6 lg:p-8 mt-10">
          <h3 className="font-serif text-2xl font-bold text-clay-900 mb-6">
            Send My Quote Request
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors"
              />
            </div>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={defaultMessage || "Tell us about your project..."}
              className="w-full px-4 py-3 border border-stone-300 bg-stone-50 text-clay-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rust-500 focus:border-rust-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-rust-500 text-white py-3.5 font-semibold text-sm hover:bg-rust-600 transition-colors"
            >
              Send My Quote Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
