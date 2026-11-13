import Image from "next/image";

export function ProjectMark({
  logo,
  className = "size-7",
}: {
  logo: string;
  name?: string;
  className?: string;
}) {
  return (
    <Image
      src={logo}
      alt=""
      width={56}
      height={56}
      className={`object-contain ${className}`}
      aria-hidden="true"
    />
  );
}
