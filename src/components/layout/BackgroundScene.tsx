import type { SectionId } from "@/data/navigation";

type BackgroundSceneProps = {
  section: SectionId;
};

const beamFade = {
  WebkitMaskImage: "linear-gradient(180deg, transparent 78px, #000 calc(78px + 30vh))",
  maskImage: "linear-gradient(180deg, transparent 78px, #000 calc(78px + 30vh))",
};

export function BackgroundScene({ section }: BackgroundSceneProps) {
  const isHome = section === "home" || section === "about";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,#102018_0%,transparent_46%),linear-gradient(180deg,#08140f_0%,#06110c_42%,#070908_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_45%,rgba(12,64,38,0.28),transparent_42%)]" />
      <div className={`absolute inset-0 transition-opacity duration-500 ${isHome ? "opacity-100" : "opacity-0"}`}>
        <div
          className="absolute top-[2%] left-1/2 h-[46%] w-[90%] -translate-x-1/2 min-[1180px]:hidden"
          style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(255,24,32,0.3), rgba(140,8,16,0.08) 48%, transparent 72%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-[16%] w-[92%] -translate-x-1/2 min-[1180px]:hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(255,16,24,0.85), rgba(180,8,16,0.4) 28%, transparent 68%)",
            filter: "blur(8px)",
          }}
        />
      </div>
      <div className={`absolute inset-0 hidden transition-opacity duration-500 min-[1180px]:block ${isHome ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0" style={{ filter: "blur(28px)", ...beamFade }}>
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(23% 0%, 37% 0%, 52% 94%, 32% 94%)",
              background: "linear-gradient(180deg, rgba(120,4,12,0.25) 0%, rgba(170,8,18,0.45) 60%, rgba(220,16,24,0.6) 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0" style={{ filter: "blur(9px)", ...beamFade }}>
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(27.6% 0%, 33.6% 0%, 47% 91%, 38% 91%)",
              background: [
                "linear-gradient(98deg, rgba(255,40,48,0.55) 0%, rgba(190,8,18,0.5) 22%, rgba(120,4,12,0.32) 60%, rgba(150,6,14,0.42) 100%)",
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 45%)",
              ].join(", "),
            }}
          />
        </div>
        <div className="absolute inset-0" style={{ filter: "blur(3px)", ...beamFade }}>
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(27.5% 0%, 28.2% 0%, 38.8% 91%, 37.9% 91%)",
              background: "linear-gradient(180deg, rgba(255,60,66,0.2) 0%, rgba(255,70,76,0.7) 60%, rgba(255,150,150,0.85) 100%)",
            }}
          />
        </div>
        <div
          className="absolute top-[30%] -left-[6%] h-[70%] w-[30%]"
          style={{
            background: "radial-gradient(ellipse at 30% 60%, rgba(255,20,28,0.32), transparent 65%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute bottom-[6%] left-[34%] h-[12%] w-[18%]"
          style={{
            background: "radial-gradient(ellipse at 50% 80%, rgba(255,40,40,0.9), rgba(200,10,20,0.35) 40%, transparent 72%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 left-[34%] h-[12%]"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 9%, #000 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, #000 9%, #000 100%)",
          }}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="river-base" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0a0c0c" stopOpacity="0" />
                <stop offset="0.5" stopColor="#080a0a" stopOpacity="0.85" />
                <stop offset="1" stopColor="#040505" />
              </linearGradient>
              <radialGradient id="river-red" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#ff3a3e" />
                <stop offset="0.45" stopColor="#d4101c" stopOpacity="0.6" />
                <stop offset="1" stopColor="#8a0610" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="river-teal" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#5ccdb0" stopOpacity="0.75" />
                <stop offset="1" stopColor="#1d6a58" stopOpacity="0" />
              </radialGradient>
              <filter id="river-water" x="-10%" y="-40%" width="120%" height="180%">
                <feTurbulence type="fractalNoise" baseFrequency="0.0025 0.07" numOctaves="2" seed="7" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" result="wave" />
                <feGaussianBlur in="wave" stdDeviation="14 2" />
              </filter>
            </defs>
            <rect x="0" y="0" width="1000" height="100" fill="url(#river-base)" />
            <g filter="url(#river-water)">
              <ellipse cx="80" cy="46" rx="150" ry="26" fill="url(#river-red)" />
              <ellipse cx="150" cy="66" rx="220" ry="26" fill="url(#river-red)" opacity="0.9" />
              <ellipse cx="380" cy="48" rx="220" ry="20" fill="url(#river-red)" opacity="0.6" />
              <ellipse cx="560" cy="74" rx="250" ry="22" fill="url(#river-red)" opacity="0.55" />
              <ellipse cx="790" cy="56" rx="220" ry="18" fill="url(#river-red)" opacity="0.38" />
              <ellipse cx="975" cy="58" rx="120" ry="28" fill="url(#river-teal)" />
            </g>
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background: "repeating-linear-gradient(180deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 6px)",
              WebkitMaskImage: "linear-gradient(180deg, transparent 15%, #000 60%)",
              maskImage: "linear-gradient(180deg, transparent 15%, #000 60%)",
            }}
          />
          <span
            className="absolute inset-x-0 top-[28%] h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,70,70,0.45), rgba(255,30,36,0.22) 40%, rgba(255,30,36,0.06) 78%, rgba(90,205,175,0.18))",
              filter: "blur(3px)",
            }}
          />
        </div>
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isHome ? "opacity-0" : "opacity-100"}`}
        style={{
          background:
            "radial-gradient(ellipse at 0% 70%, rgba(120, 8, 16, 0.22), transparent 42%), radial-gradient(ellipse at 100% 30%, rgba(90, 8, 16, 0.16), transparent 36%)",
        }}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-[132px] transition-opacity duration-500 ${isHome ? "opacity-0" : "opacity-100"}`}
      >
        <svg viewBox="0 0 1440 132" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ribbon-tone" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8a0014" stopOpacity="0.2" />
              <stop offset="14%" stopColor="#ff1820" />
              <stop offset="42%" stopColor="#ff3038" />
              <stop offset="68%" stopColor="#c01018" stopOpacity="0.72" />
              <stop offset="86%" stopColor="#3a1820" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#0c3a2c" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="ribbon-shade" x1="0" y1="0" x2="0" y2="132" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff4a50" stopOpacity="0.15" />
              <stop offset="42%" stopColor="#ff1a22" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#3a0208" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ribbon-hot" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff7078" stopOpacity="0" />
              <stop offset="16%" stopColor="#fff6f6" />
              <stop offset="48%" stopColor="#ffffff" />
              <stop offset="72%" stopColor="#ffc4c8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#146848" stopOpacity="0" />
            </linearGradient>
            <filter id="ribbon-glow" x="-6%" y="0%" width="112%" height="140%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <path
            d="M0 46C210 70 410 112 600 120C820 130 1000 96 1200 66C1330 48 1400 52 1440 56L1440 92C1380 96 1310 90 1180 112C980 148 800 168 580 158C380 148 190 108 0 82Z"
            fill="url(#ribbon-tone)"
            filter="url(#ribbon-glow)"
            opacity="0.8"
          />
          <path
            d="M0 54C210 82 410 128 600 138C820 150 1000 114 1200 82C1330 62 1400 66 1440 70L1440 108C1380 112 1310 106 1180 128C980 166 800 186 580 176C380 166 190 124 0 96Z"
            fill="#4a0610"
            opacity="0.9"
          />
          <path
            d="M0 46C210 70 410 112 600 120C820 130 1000 96 1200 66C1330 48 1400 52 1440 56L1440 86C1380 90 1310 84 1180 104C980 138 800 158 580 148C380 138 190 100 0 76Z"
            fill="url(#ribbon-shade)"
          />
          <path
            d="M0 46C210 70 410 112 600 120C820 130 1000 96 1200 66C1330 48 1400 52 1440 56"
            fill="none"
            stroke="url(#ribbon-hot)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
