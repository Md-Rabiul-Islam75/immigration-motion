import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/**
 * Brand logo. Renders the gold/white HnH wordmark from /public.
 * Swap the src if a new logo file is provided.
 */
export function Logo({
  className,
  width = 132,
  height = 80,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "inline-flex items-center transition-opacity duration-300 hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/logo-hv.svg"
        alt={site.name}
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
