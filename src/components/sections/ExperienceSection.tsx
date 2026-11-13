import { experience } from "@/data/experience";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glyph, type GlyphName } from "@/components/ui/Glyph";

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

const pillTone = {
  crimson: "border border-[#5a2830] bg-[#241216] text-[#f3ecea]",
  forest: "border border-[#234838] bg-[#121c18] text-[#e7eeea]",
};

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="flex h-auto min-h-full flex-col px-[4.6vw] pt-[10vh] pb-28 min-[1180px]:h-full min-[1180px]:pb-[168px]">
      <div className="grid flex-1 items-start gap-8 min-[1180px]:grid-cols-[minmax(240px,0.7fr)_1.3fr]">
        <div>
          <Eyebrow>{experience.eyebrow}</Eyebrow>
          <div className="mt-4">
            <DisplayHeading id="experience-heading" lines={experience.headline} size="lg" />
          </div>
          <p data-reveal="copy" className="mt-5 max-w-[320px] text-[15px] leading-[1.65] text-muted">{experience.lede}</p>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[7px] w-px bg-[linear-gradient(180deg,transparent,rgba(245,242,238,0.72)_8%,rgba(245,242,238,0.72)_92%,transparent)]"
          />
          <ol className="flex flex-col gap-3.5">
            {experience.roles.map((role) => (
              <li key={role.id} data-reveal="card" className="relative pl-9">
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 left-0 z-[1] size-3.5 -translate-y-1/2 rounded-full bg-bright shadow-[0_0_0_4px_rgba(255,20,24,0.28),0_0_16px_5px_rgba(255,20,24,0.9)]"
                />
                <article className={`grid items-center gap-4 rounded-[18px] border px-4 py-3.5 min-[1180px]:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,0.95fr)] min-[1180px]:px-5 ${cardTone[role.accent]}`}>
                  <div className="flex items-center gap-3.5">
                    <span className={`grid size-[52px] shrink-0 place-items-center rounded-[14px] ${tileTone[role.accent]}`}>
                      <Glyph name={role.icon as GlyphName} className="size-[22px]" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-[16px] font-semibold text-ivory">{role.title}</h2>
                      <p className="mt-0.5 text-[12px] text-faint">{role.focus}</p>
                    </div>
                    <span className={`ml-auto shrink-0 rounded-full px-2.5 py-1 text-[11px] leading-none font-medium tracking-wide ${pillTone[role.accent]}`}>
                      {role.duration}
                    </span>
                  </div>
                  <span aria-hidden="true" className="hidden h-11 w-px bg-ivory/20 min-[1180px]:block" />
                  <p className="text-[13.5px] leading-snug text-muted">{role.summary}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ul className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
        {experience.highlights.map((item, index) => (
          <li key={item.id} data-reveal="card" className="flex items-center gap-4">
            {index > 0 ? <span aria-hidden="true" className="hidden h-9 w-px bg-ivory/15 min-[1180px]:block" /> : null}
            <span className="text-bright">
              <Glyph name={item.icon} className="size-6" />
            </span>
            <span>
              <span className="block text-[15px] font-semibold text-ivory">{item.value}</span>
              <span className="block text-[12px] text-faint">{item.caption}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
