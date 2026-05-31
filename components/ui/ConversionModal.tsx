"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export function ConversionModal({ isOpen, onClose, formUrl }: { isOpen: boolean; onClose: () => void; formUrl: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) { dialog.showModal(); document.body.classList.add("overflow-hidden"); } 
    else { dialog.close(); document.body.classList.remove("overflow-hidden"); }
    const handleCancel = (e: Event) => { e.preventDefault(); onClose(); };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [isOpen, onClose]);

  return (
    <dialog ref={dialogRef} className="backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm bg-white rounded-xl shadow-2xl p-0 w-full max-w-3xl m-auto border-0 focus:outline-none" onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}>
      <div className="relative w-full h-[85vh] md:h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
          <span className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">Diagnóstico Estratégico Comercial</span>
          <button onClick={onClose} className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-md transition-colors"><X size={20} /></button>
        </div>
        <div className="flex-1 bg-white overflow-hidden">
          <iframe src={formUrl} className="w-full h-full border-0" title="Formulario de agendamiento Pipedrive" loading="lazy" />
        </div>
      </div>
    </dialog>
  );
}