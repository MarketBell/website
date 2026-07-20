import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Clean phone frame wrapping a real app screenshot. The screenshots already
 * include their own status bar, so the frame is a simple rounded bezel.
 */
export function PhoneMockup({
  src,
  alt,
  priority = false,
  className,
  width = 280,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  width?: number;
}) {
  const height = Math.round((width / 9) * 19.5);
  return (
    <div
      className={cn(
        "relative rounded-[2.2rem] border border-white/15 bg-navy p-2 shadow-glass-lg ring-1 ring-black/5",
        className
      )}
      style={{ width }}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy" />
      <div className="overflow-hidden rounded-[1.7rem] bg-white">
        <Image
          src={src}
          alt={alt}
          width={width - 16}
          height={height}
          priority={priority}
          sizes={`${width}px`}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
