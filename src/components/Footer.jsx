import { useEffect, useRef, useState } from "react";
import logo from "../assets/Company Logo/3ACAPLOGO.png";

export default function Footer() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👉 SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="bg-white text-[#1d1d1d] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* LOGO */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={logo}
              alt="logo"
              className="h-40 w-auto object-contain animate-[float_4s_ease-in-out_infinite]"
            />
          </div>

          {/* MALAYSIA */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold text-[20px] mb-4 relative group">
              Malaysia
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </h4>

            <p className="text-[18px] leading-[1.7] text-[#2a2a2a]">
              A-G-13A & A-01-13A, Block A, <br />
              Merchant Square, No.1, <br />
              Jalan Tropicana Selatan 1, <br />
              PJU 3, <br />
              47410 Petaling Jaya, <br />
              Selangor Darul Ehsan, <br />
              Malaysia <br />
              Tel: +6018 370 1111
            </p>
          </div>

          {/* SINGAPORE */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="font-semibold text-[20px] mb-4 relative group">
              Singapore
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </h4>

            <p className="text-[18px] leading-[1.7] text-[#2a2a2a]">
              2 Venture Drive #07-06 & #07-01 <br />
              (Vision Exchange) <br />
              Singapore 608526 <br />
              Tel: 1800 888 6008
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div
          className={`flex justify-end mt-16 transition-all duration-1000 delay-300 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[18px] text-[#2a2a2a]">
            © 2026 3ACapital. All rights reserved.
          </p>
        </div>

      </div>

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </footer>
  );
}