import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👉 SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f4f1] py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TITLE */}
        <h2
          className={`text-black text-[52px] md:text-[90px] font-extrabold text-center leading-[0.95] tracking-[-0.02em] mb-16 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          UNIFIED AI CONTROL <br /> DASHBOARD
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div
            className={`bg-[#d6b65c] rounded-[32px] p-6 md:p-8 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(214,182,92,0.5)]`}
          >
            <p className="text-white/90 text-[12px] tracking-[0.25em] mb-6">
              SMART ANALYTICS & INSIGHTS PANEL
            </p>

            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/89ced0_39eef89d3ab94e5c8d28c36aa8984e93~mv2.jpg"
                alt="Analytics dashboard"
                className="w-full h-[260px] md:h-[340px] object-cover transition-transform duration-[1500ms] hover:scale-110"
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={`bg-[#d6b65c] rounded-[32px] p-6 md:p-8 transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(214,182,92,0.5)]`}
          >
            <p className="text-white/90 text-[12px] tracking-[0.25em] mb-6">
              CONTROL INTERFACE
            </p>

            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/89ced0_26a58d7de5594741b97e1ea6faf46faa~mv2.jpg"
                alt="Control interface"
                className="w-full h-[260px] md:h-[340px] object-cover transition-transform duration-[1500ms] hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}