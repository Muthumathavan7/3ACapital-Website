import { useEffect, useRef, useState } from "react";

export default function Precision() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  // SCROLL REVEAL
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

  // PARALLAX (👉 DISABLE ON MOBILE)
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      if (window.innerWidth < 768) return; // ❗ disable mobile

      const rect = ref.current.getBoundingClientRect();
      setOffsetY(rect.top * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="bg-[#f4f4f1] py-0 overflow-hidden">

      <div className="flex flex-col md:flex-row min-h-[auto] md:min-h-[720px]">

        {/* IMAGE */}
        <div
          className={`md:w-1/2 h-[260px] sm:h-[320px] md:h-auto transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-6"
          }`}
          style={{
            transform:
              window.innerWidth >= 768
                ? `translateY(${offsetY}px)`
                : "none",
          }}
        >
          <img
            src="https://static.wixstatic.com/media/89ced0_bc34134db389496d860e0f292975fd66~mv2.jpg"
            alt="Analytics dashboard"
            className="
              w-full h-full object-cover
              rounded-none md:rounded-r-[32px]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2 flex items-center">
          <div className="
            bg-[#f4f4f1]
            px-5 sm:px-6 md:px-16
            py-10 sm:py-12 md:py-24
            rounded-none md:rounded-l-[32px]
            w-full
          ">

            {/* TITLE */}
            <h2
              className={`text-black 
                text-[28px] sm:text-[36px] md:text-[80px]
                font-extrabold leading-[1.05] md:leading-[0.9]
                tracking-[-0.02em] mb-6 md:mb-10
                transition-all duration-1000 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
            >
              PRECISION <br />
              ENGINEERING <br />
              FOR <br />
              INTELLIGENT <br />
              OPERATIONS
            </h2>

            {/* TEXT */}
            <p
              className={`text-[#5a5a5a]
                text-[14px] sm:text-[15px] md:text-[18px]
                leading-[1.7] md:leading-[1.85]
                mb-8 md:mb-12
                transition-all duration-1000 delay-200 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
            >
              We bridge the gap between complex workflows and operational excellence.
              Our AI-powered automation systems streamline healthcare processes such
              as patient scheduling, medical records, and telehealth coordination,
              while extending seamlessly into broader business operations, from CRM
              and marketing to enterprise-scale workflow automation, enabling
              organizations to operate with precision, efficiency, and scalability.
            </p>

            {/* BUTTON */}
            <a
              href="#solutions"
              className={`inline-block
                bg-[#d6a437]
                text-black
                px-6 sm:px-8
                py-2.5 sm:py-3.5
                rounded-full
                text-[13px] sm:text-[14px]
                font-medium
                transition-all duration-700 delay-300 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
            >
              EXPLORE SOLUTIONS
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}