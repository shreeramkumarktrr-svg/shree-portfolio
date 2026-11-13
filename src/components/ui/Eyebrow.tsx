export function Eyebrow({ children }: { children: string }) {
  return (
    <div data-reveal="heading" className="flex items-center gap-3">
      <span aria-hidden="true" className="h-[3px] w-7 bg-bright" />
      <span className="text-[12px] font-medium tracking-[0.22em] text-ivory uppercase">
        {children}
      </span>
    </div>
  );
}
