import { FileText } from "lucide-react";
import { getBrochureForCompany } from "../data/brochures";
import BrochureDownloadButton from "./BrochureDownloadButton";

interface CompanyBrochureCTAProps {
  /** Company route id (e.g., "energy", "shipping", "books"). Falls back to group brochure. */
  companyId?: string;
}

export default function CompanyBrochureCTA({ companyId }: CompanyBrochureCTAProps) {
  const brochure = getBrochureForCompany(companyId || "group");

  if (!brochure) return null;

  return (
    <div className="relative rounded-2xl border border-slate-800/60 bg-gradient-to-br from-[#0B132B] to-[#07122B] p-8 md:p-12 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Download Corporate Brochure
            </h3>
            <p className="text-slate-400 text-sm font-light mt-1 max-w-xl">
              Get the complete Cosmos Group corporate profile, including our
              business divisions, milestones, and capabilities in a shareable
              PDF format.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] font-mono uppercase tracking-wider text-slate-500">
              {brochure.fileSize && (
                <span className="px-2 py-1 bg-slate-950/60 border border-slate-800/60 rounded-full">
                  {brochure.fileSize}
                </span>
              )}
              {brochure.pageCount && (
                <span className="px-2 py-1 bg-slate-950/60 border border-slate-800/60 rounded-full">
                  {brochure.pageCount}
                </span>
              )}
            </div>
          </div>
        </div>

        <BrochureDownloadButton
          brochureId={brochure.id}
          label="Download Brochure"
          variant="primary"
          className="shrink-0"
        />
      </div>
    </div>
  );
}
