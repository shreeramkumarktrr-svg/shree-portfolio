import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/contact";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glyph, type GlyphName } from "@/components/ui/Glyph";
import { PillButton } from "@/components/ui/PillButton";

const cardTone = {
  crimson:
    "border-[#6e242c]/90 bg-[linear-gradient(100deg,rgba(36,8,12,0.94)_0%,rgba(14,10,12,0.78)_46%,rgba(8,12,10,0.62)_100%)] shadow-[inset_0_0_0_1px_rgba(255,48,56,0.06)]",
  forest:
    "border-[#1a4a36]/90 bg-[linear-gradient(100deg,rgba(8,32,24,0.94)_0%,rgba(8,14,12,0.78)_48%,rgba(8,12,10,0.62)_100%)] shadow-[inset_0_0_0_1px_rgba(40,160,100,0.06)]",
};

const tileTone = {
  crimson: "border border-[#ff4450]/85 bg-[#4c1218] text-ivory shadow-[0_0_16px_rgba(255,24,32,0.35)]",
  forest: "border border-[#3d9a6c]/80 bg-[#0c3022] text-[#e9fff4] shadow-[0_0_16px_rgba(24,140,80,0.3)]",
};

function PaperPlane() {
  return (
    <svg viewBox="0 0 200 160" className="h-[132px] w-[165px]" aria-hidden="true" fill="none">
      <path
        d="M10 152C44 144 70 126 78 104C84 88 72 76 60 82C48 90 58 106 76 100C94 94 106 74 124 58"
        stroke="#f5f2ee"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <g stroke="#ff1418" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M188 14L114 40L144 52Z" />
        <path d="M188 14L144 52L152 84Z" />
        <path d="M144 52L136 70L152 84" />
      </g>
    </svg>
  );
}

export function ContactSection() {
  const email = contact.channels.find((channel) => channel.id === "email");

  return (
    <section
      aria-labelledby="contact-heading"
      className="flex h-auto min-h-full max-w-full flex-col justify-start overflow-x-clip px-5 pt-8 pb-32 min-[1180px]:h-full min-[1180px]:px-[4.6vw] min-[1180px]:pt-[8vh] min-[1180px]:pb-[168px]"
    >
      <div className="grid w-full min-w-0 flex-1 items-start gap-9 min-[1180px]:grid-cols-[0.95fr_1.05fr] min-[1180px]:gap-0">
        <div className="relative min-w-0 min-[1180px]:pr-10">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <div className="relative mt-4 max-w-full min-[1180px]:max-w-[540px]">
            <DisplayHeading id="contact-heading" lines={contact.headline} size="lg" />
            <span data-reveal="media" className="pointer-events-none absolute top-[14%] left-[min(255px,48%)] hidden min-[1180px]:block">
              <PaperPlane />
            </span>
          </div>
          <p data-reveal="copy" className="mt-5 max-w-[420px] text-[15px] leading-[1.65] text-muted">
            {contact.lede}
          </p>
          <div data-reveal="card" className="mt-7">
            <PillButton label={contact.cta} href={email?.href || undefined} disabled={!email?.href} />
          </div>
        </div>

        <div className="relative min-w-0 min-[1180px]:border-l min-[1180px]:border-ivory/15 min-[1180px]:pl-8">
          <ul className="flex w-full min-w-0 flex-col gap-3">
            {contact.channels.map((channel) => {
              const inner = (
                <>
                  <span className={`grid size-11 shrink-0 place-items-center rounded-[12px] min-[1180px]:size-[52px] min-[1180px]:rounded-[14px] ${tileTone[channel.accent]}`}>
                    <Glyph name={channel.icon as GlyphName} className="size-5 min-[1180px]:size-[22px]" />
                  </span>
                  <span className="min-w-0 flex-1 pr-5">
                    <span className="block text-[14.5px] font-semibold text-ivory min-[1180px]:text-[15px]">{channel.label}</span>
                    <span className="mt-0.5 block truncate text-[12.5px] text-muted min-[1180px]:text-[13.5px]">{channel.value}</span>
                  </span>
                  <ArrowUpRight className="absolute top-3.5 right-3.5 size-4 text-faint" aria-hidden="true" />
                </>
              );
              const className = `relative flex w-full min-w-0 items-center gap-3 rounded-[16px] border px-3.5 py-3 min-[1180px]:gap-4 min-[1180px]:rounded-[18px] min-[1180px]:px-5 min-[1180px]:py-3.5 ${cardTone[channel.accent]}`;
              return (
                <li key={channel.id} data-reveal="card" className="w-full min-w-0">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className={className}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="mt-6 flex flex-col gap-3.5 border-t border-ivory/10 pt-5 min-[1180px]:flex-row min-[1180px]:flex-wrap min-[1180px]:items-center min-[1180px]:justify-between min-[1180px]:gap-4">
            {contact.traits.map((trait, index) => (
              <li key={trait.id} data-reveal="card" className="flex min-w-0 items-center gap-3 min-[1180px]:gap-3.5">
                {index > 0 ? (
                  <span aria-hidden="true" className="mr-1 hidden h-9 w-px bg-ivory/15 min-[1180px]:block" />
                ) : null}
                <span className="shrink-0 text-bright">
                  <Glyph name={trait.icon} className="size-5" />
                </span>
                <span className="text-[13px] leading-tight font-medium text-ivory min-[1180px]:max-w-[120px]">{trait.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
