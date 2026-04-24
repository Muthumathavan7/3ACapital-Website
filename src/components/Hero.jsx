import { useEffect, useState } from "react";
import { heroSlides } from "../data/mock";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((v) => (v + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-[#1d1d1d] overflow-hidden">

      {/* FULL SCREEN HERO */}
      <div className="relative w-full h-screen min-h-[100vh] overflow-hidden">

        {/* SLIDES */}
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-all duration-500 ${
              i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* CONTENT CENTER */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="
            text-white
            text-[34px]
            sm:text-[44px]
            md:text-[100px]
            font-semibold
            leading-[1.05]
            tracking-[-0.02em]
          ">
            HEALTHCARE <br />
            & AI <br />
            BUSINESS AUTOMATION
          </h1>

          {/* CTA inside hero (better UX) */}
          <a
            href="#benefits"
            className="
              mt-8
              bg-[#d6a437]
              text-white
              px-8 py-3
              rounded-full
              text-[14px]
              sm:text-[16px]
              tracking-wide
              shadow-lg
              hover:scale-105
              transition
            "
          >
            START AUTOMATING
          </a>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === idx ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}