"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
} from "framer-motion";
import { products, Product } from "@/lib/products";
import { Header } from "@/components/header";
import { AddToCart } from "@/components/add-to-cart";
import { ProductImage } from "@/components/product-image";
import { MotionDiv } from "@/app/motion-div";

type ZoomLevel = "small" | "normal" | "large";

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [_, startTransition] = useTransition();
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>("normal");
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const handleProductClick = (product: Product) => {
    startTransition(() => {
      setSelectedProduct(product);
      window.history.pushState(null, "", `/p/${product.id}`);
    });
  };

  const handleBack = useCallback(() => {
    startTransition(() => {
      setSelectedProduct(null);
      window.history.pushState(null, "", "/");
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedProduct && event.key === "Escape") {
        handleBack();
      }
    };

    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setZoomLevel(desktop ? "normal" : "small"); // 👈 ajuste aquí
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [selectedProduct, handleBack]);

  useEffect(() => {
    const handlePopState = () => {
      const productId = window.location.pathname.split("/").pop();
      if (productId && productId !== "") {
        const product = products.find((p) => p.id === productId);
        setSelectedProduct(product || null);
      } else {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const getNextZoomLevel = (current: ZoomLevel): ZoomLevel => {
    switch (current) {
      case "normal":
        return "large";
      case "large":
        return "small";
      case "small":
        return "normal";
    }
  };

  const gridMinWidth = {
    small: "80px",
    normal: "200px",
    large: "300px",
  }[zoomLevel];

  const zoomLabel = {
    small: ".",
    normal: "..",
    large: "...",
  }[zoomLevel];

  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      <LayoutGroup>
        <div className="flex flex-col min-h-screen bg-white">
          <Header isBackVisible={!!selectedProduct} onBack={handleBack} />

          <main className="flex-grow flex items-center justify-center p-4">
            {/* Solo se modificó este contenido dentro de <main> */}
            <img
              src="images/mantenimiento_2027.png"
              alt="Sitio en mantenimiento"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </main>
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
}
