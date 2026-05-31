"use client";
import { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { ConversionModal } from "@/components/ui/ConversionModal";

export function HeaderManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formUrl = "https://webforms.pipedrive.com/f/5VQRZL0MsGJQiok9MG29Iz5dQy7aUyM1lHSPnRiSTEamMlDrYtjcCI9yLJJIKTWpb5";

  useEffect(() => {
    const handleOpenModalEvent = () => setIsModalOpen(true);
    window.addEventListener("open-conversion-modal", handleOpenModalEvent);
    return () => window.removeEventListener("open-conversion-modal", handleOpenModalEvent);
  }, []);

  return (
    <>
      <Nav onOpenModal={() => setIsModalOpen(true)} />
      <ConversionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} formUrl={formUrl} />
    </>
  );
}