import { useEffect, useRef, useState } from "react";
import videoFile from "../assets/videos/0_Abstract_Digital_3840x2160.mp4";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👉 SCROLL REVEAL EFFECT
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#1d1d1d] py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* VIDEO */}
        <div
          className={`rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-10 scale-105"
          }`}
        >
          <video
            src={videoFile}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
        </div>

        {/* TEXT */}
        <div
          className={`max-w-[620px] transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-white text-[56px] md:text-[76px] font-semibold tracking-[-0.02em] mb-10">
            ABOUT US
          </h2>

          <p className="text-white/85 text-[19px] md:text-[22px] leading-[1.9] font-normal tracking-[0.02em]">
            We build intelligent systems that transform how healthcare and modern businesses operate. 
            By combining AI and automation, we reduce manual work, improve accuracy, and streamline operations. 
            Our solutions empower organizations to focus on delivering exceptional services while scaling efficiently.
          </p>
        </div>

      </div>
    </section>
  );
}