import { about } from "@/data/about";
import { profile } from "@/data/profile";
import { PillButton } from "@/components/ui/PillButton";

type AboutSectionProps = {
  onExperience: () => void;
};

export function AboutSection({ onExperience }: AboutSectionProps) {
  const resumeReady = about.resumeHref.length > 0;

  return (
    <section
      aria-labelledby="about-heading"
      className="relative z-[2] h-auto min-h-full overflow-x-clip pt-[42vh] min-[1180px]:h-full min-[1180px]:overflow-visible min-[1180px]:pt-0"
    >
      <div className="relative w-full max-w-full px-5 pb-16 text-center min-[1180px]:flex min-[1180px]:h-full min-[1180px]:items-start min-[1180px]:px-0 min-[1180px]:pb-0 min-[1180px]:text-left">
        <div className="mx-auto w-full max-w-[420px] min-w-0 text-center min-[1180px]:mx-0 min-[1180px]:mt-[clamp(32px,calc(18vh-80px),88px)] min-[1180px]:ml-[44.2%] min-[1180px]:w-[47%] min-[1180px]:max-w-none min-[1180px]:text-left">
          <p data-reveal="heading" className="text-[12px] font-medium tracking-[0.28em] text-ivory uppercase min-[1180px]:text-[16px] min-[1180px]:tracking-[0.9em]">
            {about.eyebrow}
          </p>
          <p data-reveal="heading" className="mt-2.5 text-[11px] font-medium tracking-[0.18em] text-ivory uppercase min-[1180px]:mt-[min(2vh,20px)] min-[1180px]:text-[12px] min-[1180px]:tracking-[0.46em]">
            {profile.title}
          </p>
          <span data-reveal="copy" aria-hidden="true" className="mx-auto mt-4 block h-[3px] w-14 bg-bright min-[1180px]:mx-0 min-[1180px]:mt-[min(2.8vh,28px)] min-[1180px]:w-16" />
          <h1
            id="about-heading"
            className="mt-4 max-w-full font-display font-bold tracking-[-0.025em] min-[1180px]:mt-[min(3.2vh,32px)]"
          >
            <span data-reveal="heading" className="block max-w-full text-[clamp(2.45rem,10.2vw,3.45rem)] leading-[0.9] text-ivory min-[1180px]:text-[clamp(3rem,min(4.7vw,8.3vh),4.9rem)]">
              {about.headline[0].parts[0].text}
            </span>
            <span data-reveal="heading" className="mt-[0.04em] block max-w-full text-[clamp(2.55rem,10.6vw,3.65rem)] leading-[0.88] text-bright min-[1180px]:text-[clamp(3.2rem,min(5.15vw,9.1vh),5.4rem)]">
              {about.headline[1].parts[0].text}
            </span>
          </h1>
          <p data-reveal="copy" className="mx-auto mt-5 max-w-[360px] text-[15px] leading-[1.6] text-muted min-[1180px]:mx-0 min-[1180px]:mt-[clamp(24px,calc(12vh-48px),64px)] min-[1180px]:max-w-[420px] min-[1180px]:text-[15.5px] min-[1180px]:leading-[1.65]">
            {about.lede}
          </p>
          <div data-reveal="card" className="mt-6 flex flex-col items-center gap-3.5 min-[1180px]:mt-[min(3.2vh,32px)] min-[1180px]:flex-row min-[1180px]:flex-wrap min-[1180px]:items-center min-[1180px]:gap-7">
            <PillButton
              uppercase
              variant="solid"
              label={about.primaryCta}
              onClick={onExperience}
              className="w-full max-w-[300px] min-[1180px]:hidden!"
            />
            <PillButton
              uppercase
              label={about.primaryCta}
              onClick={onExperience}
              className="max-[1179px]:hidden!"
            />
            {resumeReady ? (
              <>
                <PillButton
                  uppercase
                  icon="download"
                  label={about.secondaryCta}
                  href={about.resumeHref}
                  download
                  className="w-full max-w-[300px] min-[1180px]:hidden!"
                />
                <a
                  href={about.resumeHref}
                  download
                  className="hidden flex-col items-stretch text-[13px] font-medium tracking-[0.16em] text-ivory uppercase transition-colors hover:text-bright min-[1180px]:inline-flex"
                >
                  <span>{about.secondaryCta}</span>
                  <span className="mt-2.5 h-px w-full bg-current" />
                </a>
              </>
            ) : (
              <>
                <PillButton
                  uppercase
                  icon="download"
                  label={about.secondaryCta}
                  disabled
                  className="w-full max-w-[300px] min-[1180px]:hidden!"
                />
                <button
                  type="button"
                  aria-disabled="true"
                  className="hidden flex-col items-stretch text-[13px] font-medium tracking-[0.16em] text-ivory uppercase min-[1180px]:inline-flex"
                >
                  <span>{about.secondaryCta}</span>
                  <span className="mt-2.5 h-px w-full bg-current" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
