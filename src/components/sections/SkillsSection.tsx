import { skills } from "@/data/skills";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Glyph, type GlyphName } from "@/components/ui/Glyph";
import { ToolGlyph } from "@/components/ui/ToolGlyph";

const cardTone = {
  crimson: "border-bright/40 bg-[linear-gradient(160deg,rgba(70,12,16,0.7),rgba(8,10,9,0.25))]",
  forest: "border-[#1c4a36] bg-[linear-gradient(160deg,rgba(8,42,30,0.75),rgba(8,10,9,0.25))]",
};

const tileTone = {
  crimson: "bg-bright text-ivory",
  forest: "bg-[#0e6a44] text-ivory",
};

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading" className="flex h-auto min-h-full flex-col px-[4.6vw] pt-[8vh] pb-28 min-[1180px]:h-full min-[1180px]:pb-[128px]">
      <div className="grid items-start gap-8 min-[1180px]:grid-cols-[minmax(240px,0.72fr)_1.28fr]">
        <div>
          <Eyebrow>{skills.eyebrow}</Eyebrow>
          <div className="mt-4">
            <DisplayHeading id="skills-heading" lines={skills.headline} size="lg" />
          </div>
          <p data-reveal="copy" className="mt-5 max-w-[340px] text-[15px] leading-[1.65] text-muted">{skills.lede}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {skills.groups.map((group) => (
            <li
              key={group.id}
              data-reveal="card"
              className={`flex gap-3 rounded-2xl border px-4 py-4 ${cardTone[group.accent]}`}
            >
              <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${tileTone[group.accent]}`}>
                <Glyph name={group.icon as GlyphName} className="size-[18px]" />
              </span>
              <span>
                <h2 className="text-[16px] font-semibold text-ivory">{group.title}</h2>
                {group.lines.map((line) => (
                  <p key={line} className="mt-1 text-[13px] leading-snug text-muted">
                    {line}
                  </p>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto grid items-center gap-6 border-t border-ivory/10 pt-4 min-[1180px]:grid-cols-[400px_1fr]">
        <div>
          <Eyebrow>{skills.toolbox.eyebrow}</Eyebrow>
          <div className="mt-2">
            <DisplayHeading as="h2" id="toolbox-heading" lines={skills.toolbox.headline} />
          </div>
        </div>
        <ul className="flex gap-2 overflow-x-auto pb-1 min-[1180px]:flex-wrap min-[1180px]:gap-2.5 min-[1180px]:overflow-visible">
          {skills.toolbox.tools.map((tool) => (
            <li key={tool.id} data-reveal="card" className="w-[64px] shrink-0 min-[1180px]:w-[66px]">
              <div
                title={tool.id === "more" ? skills.toolbox.more.join(", ") : tool.label}
                className="grid h-[56px] place-items-center rounded-xl border border-ivory/10 bg-[#101614] min-[1180px]:h-[58px]"
              >
                <ToolGlyph id={tool.id} />
              </div>
              <p className="mt-1.5 text-center text-[10.5px] leading-tight text-muted">{tool.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
