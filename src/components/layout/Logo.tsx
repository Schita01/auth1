import Image from "next/image";

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <Image
      className="logo-mark"
      src="/khidi-logo.png"
      alt=""
      width={1024}
      height={856}
      style={{ height: size, width: "auto" }}
      priority
    />
  );
}
