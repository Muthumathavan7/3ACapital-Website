import { useEffect, useRef } from "react";
import { advantages } from "../data/mock";

export default function Advantages() {
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    ref.current?.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="benefits" ref={ref} className="bg-[#1d1d1d] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* TITLE */}
        <h2 className="text-white text-[36px] sm:text-[48px] md:text-[88px] font-semibold tracking-[-0.02em] mb-6">
          KEY ADVANTAGES
        </h2>

        {/* GOLD LINE */}
        <div className="w-full h-[1px] bg-[#d6a437] mb-10 md:mb-16 opacity-60" />

        {/* ITEMS */}
        <div className="flex flex-col gap-14 md:gap-20">

          {advantages.map((a, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={a.number} className="reveal">

                {/* MOBILE (STACK) */}
                <div className="block md:hidden">

                  {/* IMAGE */}
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>

                  {/* CARD */}
                  <div className="bg-[#2a2a2a] border border-white/20 border-dashed rounded-xl p-5">
                    <div className="text-[#d6a437] text-[28px] font-bold mb-2">
                      {a.number}
                    </div>

                    <h3 className="text-white text-[16px] font-semibold uppercase mb-2">
                      {a.title}
                    </h3>

                    <p className="text-white/70 text-[13px] leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                </div>

                {/* DESKTOP (UNCHANGED DESIGN) */}
                <div
                  className={`hidden md:flex relative ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="relative w-full md:w-[85%] flex items-center">

                    {/* IMAGE */}
                    <div
                      className={`w-[55%] rounded-2xl overflow-hidden ${
                        isLeft ? "order-2 ml-auto" : "order-1 mr-auto"
                      }`}
                    >
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>

                    {/* CARD */}
                    <div
                      className={`
                        absolute 
                        ${isLeft ? "left-0" : "right-0"}
                        w-[50%]
                        bg-[#2a2a2a]
                        border border-white/20
                        border-dashed
                        rounded-2xl
                        p-8
                        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                      `}
                    >
                      <div className="text-[#d6a437] text-[42px] font-bold mb-3">
                        {a.number}
                      </div>

                      <h3 className="text-white text-[22px] font-semibold uppercase mb-3">
                        {a.title}
                      </h3>

                      <p className="text-white/75 text-[15px] leading-relaxed">
                        {a.desc}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}