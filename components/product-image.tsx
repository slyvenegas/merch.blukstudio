import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Product } from "@/lib/products";

interface ProductImageProps {
  product: Product;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  layoutId?: string;
  isFullView?: boolean;
}

export function ProductImage({
  product,
  maxWidth = "100%",
  maxHeight = "none",
  className = "",
  layoutId,
  isFullView = false,
}: ProductImageProps) {
  const [zoom, setZoom] = useState({ x: 0, y: 0, active: false });
  const fullImageRef = useRef<HTMLDivElement>(null);
  const [showFullImage, setShowFullImage] = useState(isFullView);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false); // Estado para detectar si es escritorio

  // Efecto para detectar si es escritorio
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Consideramos escritorio si el ancho es >= 768px
    };

    // Ejecutamos al montar el componente
    handleResize();

    // Escuchamos cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiamos el listener al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sincroniza showFullImage con isFullView
  useEffect(() => {
    setShowFullImage(isFullView);
  }, [isFullView]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!product.fullImage || !fullImageRef.current || !isDesktop) return; // Solo aplica en escritorio

    const { left, top, width, height } = fullImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoom({ x, y, active: true });
  };

  const handleMouseEnter = () => {
    if (!isFullView) {
      setShowFullImage(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isFullView) {
      setShowFullImage(false);
      setZoom({ x: 0, y: 0, active: false });
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.fullImage.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.fullImage.length) % product.fullImage.length);
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
      {/* Miniatura (SIEMPRE visible) */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
        loading="eager"
        decoding="sync"
        quality={100}
        unoptimized
      />

      {/* fullImage aparece al hacer hover o en vista ampliada */}
      {product.fullImage && showFullImage && (
        <div
          ref={fullImageRef}
          onMouseMove={isDesktop ? handleMouseMove : undefined} // Solo aplica en escritorio
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 flex items-center justify-center bg-white"
          style={{
            zIndex: 10,
          }}
        >
          {/* Imagen actual */}
          <Image
            src={product.fullImage[currentImageIndex]}
            alt={`${product.name} - Full Image`}
            width={500}
            height={500}
            className="object-contain"
            priority
          />

          {/* Botones de navegación (solo si hay más de una imagen) */}
          {product.fullImage.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 30,
                  backgroundColor: 'rgb(153 145 145 / 40%)',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
              >
                &lt;
              </button>
              <button
                onClick={handleNextImage}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 30,
                  backgroundColor: 'rgb(153 145 145 / 40%)',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
              >
                &gt;
              </button>
            </>
          )}

          {/* Efecto lupa (solo en escritorio) */}
          {zoom.active && isDesktop && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                backgroundImage: `url(${product.fullImage[currentImageIndex]})`,
                backgroundSize: "600%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                transform: "translate(-50%, -50%)",
                left: `${zoom.x}%`,
                top: `${zoom.y}%`,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                border: "1px solid transparent",
                clipPath: "circle(60%)",
                zIndex: 20,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ProductImage;