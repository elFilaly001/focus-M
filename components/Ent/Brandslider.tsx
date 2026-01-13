

const LogoSlider = () => {
  const logos = [
    { id: 1, name: "OCP", src: "https://www.pngfind.com/pngs/m/691-6911535_ocp-group-logo-png-transparent-png-ocp-group.png", height: "60px" },
    { id: 2, name: "Ebertec", src: "https://red.ma/wp-content/uploads/2022/12/EBERTEC-TEC.png", height: "60px" },
    { id: 3, name: "DWP", src: "https://dwp.ma/wp-content/uploads/2023/05/DWP-logo.png", height: "60px" },
    { id: 4, name: "AJARINVEST", src: "https://ajarinvest.ma/wp-content/uploads/2020/06/Logo-Ajarinvest.png", height: "60px" },
    { id: 5, name: "Engor", src: "https://www.engor.net/wp-content/uploads/2019/05/logo-engor-v2-e1748542387856.png", height: "60px" },
    { id: 6, name: "Concept Cerame", src: "https://conceptcerame.com/wp-content/uploads/2025/02/Blue-Waves-Surfing-Club-Logo-250-x-55-px-2.png", height: "60px" },
  ];


  // Triple the logos to ensure smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16">
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
              <div
                key={`${logo.id}-${index}`}
                className="logo-item"
              >
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