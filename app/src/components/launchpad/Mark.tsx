
import Image from "next/image";

/**
 * OpenLaunch mark using the custom favicon.svg.
 * Preserves the original 32x32 view dimensions and size prop.
 */
export default function Mark({
  size = 24,
  className = "",
  title = "oblaunch",
  tile = true,
  color = "#FFFFFF",
}: {
  size?: number;
  className?: string;
  title?: string;
  tile?: boolean;
  color?: string;
}) {
  return (
    <Image
      src="/favicon.svg"
      alt={title}
      width={size}
      height={size}
      className={className}
      unoptimized
      aria-label={title}
    />
  );
}

/** Wordmark: "oblaunch" + ".lol" in brand blue. */
export function Wordmark({
  className = "",
  size = 15,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`font-semibold tracking-tight text-ink ${className}`}
      style={{ fontSize: size }}
    >
      oblaunch<span className="text-brand">.lol</span>
    </span>
  );
}
