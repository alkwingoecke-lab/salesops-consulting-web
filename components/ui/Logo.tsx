import Image from "next/image";

interface LogoProps {
  variant?: "full-dark" | "full-light" | "isotype";
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ variant = "full-dark", width = 200, height = 48, className = "" }: LogoProps) {
  const getSrc = () => {
    switch (variant) {
      case "full-light": return "/logos/logo-salesops-light.png";
      case "isotype": return "/logos/iso-salesops.png";
      case "full-dark": default: return "/logos/logo-salesops-dark.png";
    }
  };

  return (
   <Image 
  src={getSrc()} 
  alt="SalesOps Consulting" 
  width={width} 
  height={height} 
  className={`object-contain ${className}`} 
  sizes="(max-width: 768px) 100vw, 200px" 
  style={{ width: 'auto', height: 'auto' }} // <--- ESTO ES LO QUE FALTA
  priority 
/>
  );
}