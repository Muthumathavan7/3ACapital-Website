import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { integrations } from "../data/mock";

export default function Ecosystem() {
  const [open, setOpen] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

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
    <section ref={ref} className="bg-[#f4f4f1] text-[#1d1d1d] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        {/* TITLE */}
        <h2
          className={`text-black 
            text-[34px] sm:text-[44px] md:text-[96px]
            font-extrabold 
            leading-[1.05] md:leading-[0.95]
            tracking-[-0.02em] 
            mb-6 md:mb-8
            transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
        >
          INTEGRATION & ECO-SYSTEM
        </h2>

        {/* LINE */}
        <div className="border-t border-black/30 mb-6 md:mb-10" />

        {/* LIST */}
        <div>
          {integrations.map((it, i) => {
            const isOpen = open === i;

            return (
              <div
                key={it.title}
                className="border-b border-dashed border-black/30"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="
                    w-full 
                    flex flex-col md:flex-row
                    items-start md:items-center
                    justify-between
                    gap-2 md:gap-6
                    py-5 md:py-6
                  "
                >
                  {/* TEXT BLOCK */}
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 w-full">

                    {/* TITLE */}
                    <span className="
                      text-[16px] sm:text-[18px] md:text-[24px]
                      font-medium
                      tracking-wide
                      break-words
                    ">
                      {it.title}
                    </span>

                    {/* TAG */}
                    <span className="
                      text-[10px] sm:text-[11px] md:text-[12px]
                      tracking-[0.2em]
                      text-black/50
                      uppercase
                    ">
                      {it.tag}
                    </span>
                  </div>

                  {/* PLUS ICON */}
                  <Plus
                    size={18}
                    className={`text-[#ff6a00] transition-all duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-5 text-[13px] md:text-[15px] text-[#333] leading-relaxed">
                    {it.detail}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}