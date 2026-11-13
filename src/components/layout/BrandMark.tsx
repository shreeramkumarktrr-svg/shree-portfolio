import Image from "next/image";

export function BrandMark() {
  return (
    <Image
      src="/images/logo.png"
      alt="SRK"
      width={2158}
      height={729}
      priority
      className="h-[26px] w-auto"
    />
  );
}
