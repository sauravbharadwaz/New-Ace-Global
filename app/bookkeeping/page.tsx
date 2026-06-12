import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Bookkeeping | Ace Global",
  description:
    "Get your books closed and your financials monthly, quarterly, or annually — handled by a dedicated CPA-led team.",
};

const features = [
  {
    tag: "Always current",
    tagStyle: "bg-[#D6F5E3] text-[#1A7A44]",
    title: "Books that close on your schedule.",
    desc: "Monthly, quarterly, or annual closes — whatever fits your business. Transactions are categorized, accounts reconciled, and statements delivered without you chasing anyone.",
    bullets: [
      "Monthly, quarterly, or annual close",
      "Bank & credit card reconciliation",
      "Accurate P&L, balance sheet, and cash flow",
    ],
  },
  {
    tag: "Dedicated team",
    tagStyle: "bg-[#0053ce]/10 text-[#0053ce]",
    title: "A real bookkeeper who knows your business.",
    desc: "You get a dedicated bookkeeper backed by CPAs — reachable on WhatsApp or iMessage. Your AI agent answers day-to-day questions about your numbers in real time.",
    bullets: [
      "Dedicated bookkeeper for your account",
      "CPA review on every close",
      "Ask your AI agent anytime",
    ],
  },
  {
    tag: "Investor ready",
    tagStyle: "bg-[#94a6fe]/20 text-[#243889]",
    title: "Financials you can hand to anyone.",
    desc: "Clean statements that hold up with lenders, investors, and the IRS. Historical cleanup is included in onboarding, so you start from a tidy baseline.",
    bullets: [
      "Historical cleanup included",
      "Lender & investor-ready reports",
      "Year-end packages for tax filing",
    ],
  },
];

function BooksMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#c2c6d8]/20 max-w-md w-full mx-auto">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-medium text-[#00174c]">Monthly Close — June</p>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
          ✓ Closed
        </span>
      </div>
      {[
        { label: "Revenue", value: "$48,200" },
        { label: "Expenses", value: "$12,850" },
        { label: "Net Income", value: "$35,350" },
        { label: "Cash Balance", value: "$142,000" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex justify-between items-center py-3 border-b border-[#c2c6d8]/20 last:border-0"
        >
          <span className="text-sm text-[#727687]">{row.label}</span>
          <span className="text-sm font-semibold text-[#00174c]">{row.value}</span>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t border-[#c2c6d8]/20 flex items-center gap-2 text-xs text-[#727687]">
        <span className="w-2 h-2 rounded-full bg-green-400" />
        Reconciled by your bookkeeper
      </div>
    </div>
  );
}

export default function BookkeepingPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-white overflow-hidden">
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#94a6fe]/20 border border-[#94a6fe]/30 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium tracking-wide text-[#243889]">Bookkeeping</span>
            </div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-medium leading-[1.12] md:leading-[1.1] tracking-[-0.02em] text-[#00174c] max-w-4xl mx-auto mb-5 md:mb-6">
              Get your books closed and your financials —{" "}
              <span className="text-[#0053ce]">monthly, quarterly, or annually.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#727687] max-w-2xl mx-auto mb-8 md:mb-12">
              A dedicated CPA-led team keeps your books continuously updated across banks, Stripe,
              and business systems — so you always know your burn, runway, and cash flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <button className="bg-[#0053ce] text-white px-6 md:px-8 py-2.5 md:py-4 rounded-full font-medium text-sm md:text-lg hover:bg-[#0053ce]/90 transition-all shadow-xl shadow-[#0053ce]/25">
                Get started
              </button>
              <button className="bg-[#94a6fe] text-[#243889] px-6 md:px-8 py-2.5 md:py-4 rounded-full font-medium text-sm md:text-lg hover:bg-[#94a6fe]/80 transition-all">
                Book a demo
              </button>
            </div>
          </div>
        </section>

        {/* Feature rows */}
        <section className="py-16 md:py-[120px] bg-[#f2f3ff] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-5 md:px-6 space-y-24">
            {features.map((f, i) => (
              <div
                key={f.tag}
                className="bg-white rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm"
              >
                <div className={`flex-1 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 ${f.tagStyle}`}
                  >
                    {f.tag}
                  </span>
                  <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.2] text-[#00174c] mb-6">
                    {f.title}
                  </h2>
                  <p className="text-lg text-[#727687] mb-8 leading-relaxed">{f.desc}</p>
                  <ul className="space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-[#00174c]">
                        <svg
                          className="w-5 h-5 text-[#0053ce] shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm md:text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex-1 w-full ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <BooksMockup />
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
