import Image from "next/image";
import { useState, useRef } from "react";
import { Product } from "@/lib/products";

interface ProductImageProps {
  product: Product;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  layoutId?: string;
}

export function ProductImage({
  product,
  maxWidth = "100%",
  maxHeight = "none",
  className = "",
  layoutId,
}: ProductImageProps) {
  const [zoom, setZoom] = useState({ x: 0, y: 0, active: false });
  const fullImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!product.fullImage || !fullImageRef.current) return; // Solo activa la lupa si existe fullImage

    const { left, top, width, height } = fullImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoom({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setZoom({ x: 0, y: 0, active: false });
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: "100%",
        maxWidth,
        maxHeight,
        aspectRatio: "1",
        overflow: "hidden",
        position: "relative",
        marginTop: "4%",
      }}
    >
      {/* Imagen miniatura (NO tiene efecto lupa) */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        loading="eager"
        decoding="sync"
        quality={100}
        unoptimized={true}
      />

      {/* Imagen fullImage (solo visible al hacer clic) */}
      {product.fullImage && (
        <div
          ref={fullImageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 bg-white flex items-center justify-center"
          style={{
            display: zoom.active ? "block" : "none",
            zIndex: 10,
          }}
        >
          <Image
            src={product.fullImage}
            alt={`${product.name} - Full Image`}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      )}

      {/* Efecto lupa solo en `fullImage` */}
      {zoom.active && product.fullImage && (
        <div
          className="zoom-lens"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            backgroundImage: `url(${product.fullImage})`,
            backgroundSize: "1000%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${zoom.x}% ${zoom.y}%`,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            left: `${zoom.x}%`,
            top: `${zoom.y}%`,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            border: "2px solid white",
            clipPath: "circle(50%)",
          }}
        />
      )}
    </div>
  );
}

export default ProductImage;
