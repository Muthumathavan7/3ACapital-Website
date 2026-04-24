import { useEffect, useState } from "react";
import { navLinks } from "../data/mock";
import { Menu, X } from "lucide-react";
import logo from "../assets/Company Logo/3ACAPLOGO.png";

const BullLogo = () => (
  <svg width="56" height="50" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Horns */}
    <path fill="#d4a244" d="M8 22c0-6 4-12 10-14-2 8 0 16 6 22-6 2-12 0-16-8zM112 22c0-6-4-12-10-14 2 8 0 16-6 22 6 2 12 0 16-8z"/>
    {/* Head */}
    <path fill="#d4a244" d="M60 18c-16 0-30 10-34 24-2 8 0 16 6 22 4 4 10 6 16 6l-2 10 5-3 3 4 4-5 4 5 3-4 5 3-2-10c6 0 12-2 16-6 6-6 8-14 6-22-4-14-18-24-34-24z"/>
    {/* Nose ring area */}
    <ellipse cx="60" cy="68" rx="10" ry="4" fill="#1d1d1d"/>
    {/* Eyes */}
    <circle cx="48" cy="50" r="2.5" fill="#1d1d1d"/>
    <circle cx="72" cy="50" r="2.5" fill="#1d1d1d"/>
    {/* Nostrils */}
    <circle cx="55" cy="66" r="1.5" fill="#d4a244"/>
    <circle cx="65" cy="66" r="1.5" fill="#d4a244"/>
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>

      <header
        className={`sticky top-0 z-50 bg-[#1d1d1d] transition-shadow ${
          scrolled ? "shadow-[0_6px_20px_rgba(0,0,0,0.55)]" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-5">
    <a href="#home" className="flex items-center h-16">
  <img
    src={logo}
    alt="logo"
    className="h-full w-auto object-contain"
  />
</a>

          <nav className="hidden md:flex items-center gap-16">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`nav-link text-white text-[15px] tracking-[0.22em] font-medium ${
                  active === l.label ? "active text-[#d4a244]" : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block w-[52px]" />

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#1d1d1d]">
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setActive(l.label);
                    setOpen(false);
                  }}
                  className="text-white tracking-[0.22em] text-sm font-medium hover:text-[#d4a244]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
