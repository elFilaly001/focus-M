import React from "react";

const LogoSlider = () => {
  const logos = [
    { id: 1, name: "UM6P", src: "/um6p.webp" },
    { id: 2, name: "ENSAM", src: "/ensam.webp" },
    { id: 3, name: "AFRICA BUSINESS SCHOOL", src: "/abs.webp" },
    { id: 4, name: "YOUCODE", src: "/youcode.webp" },
    { id: 5, name: "EFI", src: "/efi.webp" },
    { id: 12, name: "MAUPASSANT", src: "/sophie.webp" },
    { id: 6, name: "ECOLE BELGE", src: "/ebm.webp" },
    { id: 7, name: "CMC", src: "/cmc.webp" },
    { id: 8, name: "OFPPT", src: "/ofppt.webp" },
    { id: 9, name: "1337", src: "/1337.webp" },
    { id: 10, name: "LYDEX", src: "/lyceexcel.webp" },
    { id: 11, name: "MAUPASSANT", src: "/maupassant.webp" }
  ];

  // Triple the logos to ensure smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      id="references"
      className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Références
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Sliding Track */}
          <div className="logo-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item">
                <div className="bg-slate-900/80 dark:bg-slate-900/80 rounded-xl p-4 flex items-center justify-center shadow-sm">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-28 w-auto max-h-28 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .logo-track {
          display: flex;
          width: max-content;
          animation: scroll 45s linear infinite;
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          flex-shrink: 0;
          margin: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
