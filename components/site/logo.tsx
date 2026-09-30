import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function LogoLockup({ className }: LogoProps) {
  return (
    <span className={`flex h-8 items-center gap-2.5 ${className ?? ""}`}>
      <Image
        alt=""
        className="h-full w-auto"
        height={198}
        priority
        src="/brand/avalon-labs-mark.png"
        width={216}
      />
      <Image
        alt="Avalon Labs"
        className="h-full w-auto"
        height={124}
        priority
        src="/brand/avalon-labs-wordmark.png"
        width={428}
      />
    </span>
  );
}

export function LogoFull({ className }: LogoProps) {
  return (
    <Image
      alt="Avalon Labs"
      className={className}
      height={356}
      priority
      src="/brand/avalon-labs-full.png"
      width={428}
    />
  );
}
