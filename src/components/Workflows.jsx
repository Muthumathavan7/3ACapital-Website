import { useEffect, useRef, useState } from "react";
import { healthcareFeatures, crossIndustryFeatures } from "../data/mock";

/* ===== FEATURE BLOCK ===== */
const FeatureBlock = ({ title, features, bg }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

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

  // 👉 PARALLAX BACKGROUND
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setOffsetY(rect.top * 0.15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[720px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#3a1f10]/60" />

      {/* CONTENT */}
      <div className="relative w-full max-w-[1400px] mx-auto px-8 py-24">

        {/* TITLE */}
        <h2
          className={`text-white text-[50px] md:text-[110px] font-bold leading-[0.95] tracking-[-0.02em] mb-12 max-w-[900px] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {title.toUpperCase()}
        </h2>

        {/* GLASS CARD */}
        <div
          className={`max-w-[650px] bg-black/50 backdrop-blur-md rounded-3xl px-8 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <ul className="text-left">
            {features.map((f, i) => (
              <li
                key={i}
                className={`
                  text-white/90
                  text-[16px] md:text-[18px]
                  leading-[1.9]
                  py-4
                  border-b border-white/20
                  last:border-none
                  transition-all duration-700
                  ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }
                `}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

/* ===== MAIN ===== */
export default function Workflows() {
  return (
    <div id="solutions">

      <FeatureBlock
        title="Healthcare Workflow Automation System"
        features={healthcareFeatures}
        bg="https://static.wixstatic.com/media/89ced0_e7ed76f849474b0eae2a9367c24bd113~mv2.jpg"
      />

      <FeatureBlock
        title="Cross-Industry AI Automation Hub"
        features={crossIndustryFeatures}
        bg="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=80"
      />

    </div>
  );
}