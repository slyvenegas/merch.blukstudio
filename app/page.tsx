"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
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
      setIsDesktop(window.innerWidth >= 768);
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
    small: "190px",
    normal: "260px",
    large: "460px",
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
        <div className="flex flex-col min-h-screen mt-12">
          <Header isBackVisible={!!selectedProduct} onBack={handleBack} />

          <main className="flex-grow relative pt-12">
            {/* Zoom Button */}
            {isDesktop && (
              <button
                onClick={() => setZoomLevel(getNextZoomLevel(zoomLevel))}
                className="hidden md:block fixed bottom-4 right-4 z-50 px-4 py-2 bg-black text-white rounded-full shadow-lg"
              >
                {zoomLabel}
              </button>
            )}

            {/* Product Grid */}
            <MotionDiv
              layout
              className="pb-8 grid gap-6"
              style={
                isDesktop
                  ? {
                      gridTemplateColumns: `repeat(auto-fit, minmax(${gridMinWidth}, 1fr))`,
                    }
                  : undefined
              }
              animate={{
                opacity: selectedProduct ? 0 : 1,
              }}
              transition={{
                opacity: { duration: 0.3 },
              }}
            >
              {products.map((product, i) => (
                <MotionDiv
                  key={product.id}
                  layoutId={`product-card-${product.id}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.03 }}
                  className="group cursor-pointer w-full"
                  onClick={() => handleProductClick(product)}
                >
                  <ProductImage
                    product={product}
                    layoutId={`product-image-${product.id}`}
                    className="w-full"
                  />
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* Product Detail View */}
            <AnimatePresence>
              {selectedProduct && (
                <MotionDiv
                  layoutId={`product-card-${selectedProduct.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 flex flex-col items-center justify-between bg-white bg-opacity-90 z-50"
                  style={{
                    top: "0",
                    height:
                      "calc(100vh - 80px - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
                    paddingTop: "calc(20px + env(safe-area-inset-top))",
                    paddingBottom: "0",
                  }}
                >
                  <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col items-center justify-center p-4">
                    <ProductImage
                      product={selectedProduct}
                      maxWidth="100%"
                      maxHeight="calc(100vh - 250px - env(safe-area-inset-top) - env(safe-area-inset-bottom))"
                      className="w-full"
                      layoutId={`product-image-${selectedProduct.id}`}
                      isFullView={true}
                    />
                  </div>

                  <MotionDiv
                    className="w-full max-w-md mx-auto p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <AddToCart product={selectedProduct} />
                  </MotionDiv>
                </MotionDiv>
              )}
            </AnimatePresence>
          </main>
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
}
