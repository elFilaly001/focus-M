import React from "react";

const LogoSlider = () => {
  const logos = [
    {
      id: 1,
      name: "UM6P",
      src: "https://api.vector.ma/vectors/thumbnail/831709e9-7687-4909-8201-3070a694ab4b",
      height: "56px",
    },
    {
      id: 2,
      name: "ENSAM",
      src: "https://api.vector.ma/vectors/thumbnail/51fc478f-d9a9-4d13-a23f-0bdcfc905ccc",
      height: "160px",
    },
    {
      id: 3,
      name: "AFRICA BUSINESS SCHOOL",
      src: "https://images.seeklogo.com/logo-png/44/1/africa-business-school-logo-png_seeklogo-440526.png",
      height: "100px",
    },
    {
      id: 4,
      name: "YOUCODE",
      src: "https://youcode.ma/images/logos/youcode_logo_dark.png",
      height: "50px",
    },
    {
      id: 5,
      name: "EFI",
      src: "https://eficasablanca.org/wp-content/uploads/2022/12/logo-EFI-09052023-1.webp",
      height: "60px",
    },
    {
      id: 6,
      name: "ECOLE BELGE",
      src: "https://www.ecolebelge.org/web/image/website/1/logo/Ecole%20Belge%20Maroc?unique=2e6cccb",
      height: "60px",
    },
    {
      id: 7,
      name: "CMC",
      src: "https://cmc.ac.ma/sites/default/files/images/header/cmc-logo.png",
      height: "80px",
    },
    {
      id: 8,
      name: "OFPPT",
      src: "https://www.ofppt.ma/themes/custom/ofppt/assets/images/logo.png",
      height: "90px",
    },
    {
      id: 9,
      name: "1337",
      src: "https://myapi.um6p.ma/sites/default/files/2025-05/UM6P_1337.png",
      height: "130px",
    },
    {
      id: 10,
      name: "LYDEX",
      src: "https://lydex-rabat.ma/demo/images/logo.png",
      height: "60px",
    }
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
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ height: logo.height }}
                  className="w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
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
