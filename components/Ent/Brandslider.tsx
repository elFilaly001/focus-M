const LogoSlider = () => {
  const logos = [
    { id: 3, name: "DWP", src: "https://dwp.ma/wp-content/uploads/2023/05/DWP-logo.png" },
    { id: 4, name: "AJARINVEST", src: "/ajar.png" },
    { id: 1, name: "OCP", src: "/ocp.webp" },
    { id: 6, name: "Concept Cerame", src: "/conceptcerame.webp" },
    { id: 8, name: "Deloitte", src: "/10.png" },
    { id: 5, name: "Engor", src: "/engor.png" },
    { id: 7, name: "CDM", src: "https://www.creditdumaroc.ma/sites/all/themes/custom/cdm_rebrand/assets/images/icons/logo_cdm.svg" },
    { id: 9, name: "PWC", src: "/pwc.webp" },
    { id: 2, name: "Ebertec", src: "https://red.ma/wp-content/uploads/2022/12/EBERTEC-TEC.png" },
    { id: 10, name: "Nexia", src: "/nexia.webp" },
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
                <div className="rounded-xl p-4 flex items-center justify-center shadow-sm">
                  {logo.name === "PWC" ? (
                    <>
                      <img
                        src="/pwclight.webp"
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto block dark:hidden"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                      <img
                        src="/pwcdark.webp"
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto hidden dark:block"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                    </>
                  ) : logo.name === "Deloitte" ? (
                    <>
                      <img
                        src="/deloitelight.webp"
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto block dark:hidden"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                      <img
                        src="/deloitedark.webp"
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto hidden dark:block"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                    </>
                  ) : logo.name === "Nexia" ? (
                    <>
                      <img
                        src="/nexialight.webp"
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto block dark:hidden"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                      <img
                        src="/nexia.webp"
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto hidden dark:block"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                    </>
                  ) : logo.name === "OCP" ? (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-32 w-56 object-contain mx-auto"
                        style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                        loading="lazy"
                      />
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-32 w-56 object-contain mx-auto"
                      style={{ maxHeight: '8rem', maxWidth: '14rem', minHeight: '5rem', minWidth: '8rem' }}
                      loading="lazy"
                    />
                  )}
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
