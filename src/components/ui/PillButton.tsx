import { ArrowRight, Download } from "lucide-react";

type PillButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  disabled?: boolean;
  variant?: "outline" | "solid";
  icon?: "arrow" | "download" | "none";
  uppercase?: boolean;
  className?: string;
};

export function PillButton({
  label,
  onClick,
  href,
  download,
  disabled,
  variant = "outline",
  icon = "arrow",
  uppercase = false,
  className: extraClass = "",
}: PillButtonProps) {
  const className = `inline-flex h-[56px] items-center justify-center gap-3 rounded-full px-7 text-[13px] font-medium transition-colors ${
    uppercase ? "tracking-[0.16em] uppercase" : "tracking-[0.01em]"
  } ${
    variant === "solid"
      ? "bg-bright text-ivory hover:bg-[#ff3a40]"
      : "border border-ivory/85 text-ivory hover:border-bright hover:bg-bright/10"
  } ${extraClass}`;
  const glyph =
    icon === "none" ? null : icon === "download" ? (
      <Download className="size-4" strokeWidth={1.7} aria-hidden="true" />
    ) : (
      <ArrowRight className="size-4" strokeWidth={1.7} aria-hidden="true" />
    );

  if (href && !disabled) {
    return (
      <a href={href} download={download || undefined} className={className}>
        {label}
        {glyph}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      className={className}
    >
      {label}
      {glyph}
    </button>
  );
}
