import { Download } from "lucide-react";
import { getBrochureById } from "../data/brochures";

export type DownloadVariant = "primary" | "secondary" | "minimal";

interface BrochureDownloadButtonProps {
  /** Brochure ID from brochures.ts. Either this or href must be provided. */
  brochureId?: string;
  /** Direct file URL. Overrides brochureId resolution. */
  href?: string;
  /** Button label. Defaults to "Download Brochure". */
  label?: string;
  /** Visual style. Defaults to "primary". */
  variant?: DownloadVariant;
  /** Optional additional classes */
  className?: string;
  /** Whether to open in a new tab instead of downloading directly */
  openInNewTab?: boolean;
}

export default function BrochureDownloadButton({
  brochureId,
  href,
  label = "Download Brochure",
  variant = "primary",
  className = "",
  openInNewTab = false,
}: BrochureDownloadButtonProps) {
  const resolved = brochureId ? getBrochureById(brochureId) : undefined;
  const fileUrl = href || resolved?.fileUrl;

  if (!fileUrl) {
    console.warn(
      `BrochureDownloadButton: no brochure found for id="${brochureId}" and no href provided.`
    );
    return null;
  }

  const base =
    "inline-flex items-center justify-center gap-2 font-bold text-sm rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 active:scale-95";

  const variantStyles: Record<DownloadVariant, string> = {
    primary:
      "bg-red-700 hover:bg-red-600 text-white px-6 py-3.5 shadow-xl shadow-red-950/20 focus-visible:ring-red-500",
    secondary:
      "bg-[#081730]/70 hover:bg-[#081730] border border-slate-700 hover:border-slate-500 text-slate-100 px-6 py-3.5 focus-visible:ring-slate-500",
    minimal:
      "text-red-500 hover:text-red-400 font-medium underline underline-offset-4 decoration-red-500/30 hover:decoration-red-400 px-0 py-0",
  };

  return (
    <a
      href={fileUrl}
      download={openInNewTab ? undefined : true}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`${base} ${variantStyles[variant]} ${className}`}
    >
      {variant !== "minimal" && <Download className="w-4 h-4" />}
      {label}
    </a>
  );
}
