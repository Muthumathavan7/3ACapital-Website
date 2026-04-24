import { useEffect, useRef, useState } from "react";
import videoFile from "../assets/videos/0_Data_Visualization_Financial_Data_3840x2160.mov";

export default function Builder() {
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

  // 👉 PARALLAX VIDEO
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setOffsetY(rect.top * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${offsetY}px) scale(1.05)`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* GLASS CONTAINER */}
        <div
          className={`rounded-[32px] border border-[#d6b65c]/50 bg-black/30 backdrop-blur-md p-10 md:p-16 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } hover:shadow-[0_0_60px_rgba(214,182,92,0.4)]`}
        >

          {/* TITLE */}
          <h2
            className={`text-white text-[52px] md:text-[80px] font-bold leading-[0.95] mb-6 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            AI Builder Tools
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`text-white/80 text-[18px] max-w-[800px] mb-14 leading-[1.8] transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Engineer intelligent systems with our modular builder. Drag-and-drop
            interfaces designed for healthcare compliance and enterprise scalability.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <div
              className={`bg-[#f4f4f1] rounded-[28px] p-8 md:p-10 transition-all duration-1000 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(214,182,92,0.4)]`}
            >
              <h3 className="text-black text-[28px] font-bold mb-4">
                Healthcare Assistant
              </h3>

              <p className="text-[#4a4a4a] text-[16px] leading-[1.7] mb-8">
                Specialized modules for patient scheduling, telehealth coordination,
                and medical records handling. Built to meet HIPAA and SOC 2 standards.
              </p>

              <a
                href="#builder"
                className="inline-block bg-[#d6a437] text-black px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:opacity-90 hover:scale-105 transition"
              >
                START BUILDING
              </a>
            </div>

            {/* CARD 2 */}
            <div
              className={`bg-[#f4f4f1] rounded-[28px] p-8 md:p-10 transition-all duration-1000 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:scale-[1.05] hover:shadow-[0_20px_60px_rgba(214,182,92,0.4)]`}
            >
              <h3 className="text-black text-[28px] font-bold mb-4">
                Business Bot
              </h3>

              <p className="text-[#4a4a4a] text-[16px] leading-[1.7] mb-8">
                Lead qualification, CRM integration, and support automation.
                Scalable AI agents that handle 24/7 inquiries across sales and service channels.
              </p>

              <a
                href="#builder"
                className="inline-block bg-[#d6a437] text-black px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:opacity-90 hover:scale-105 transition"
              >
                START BUILDING
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}