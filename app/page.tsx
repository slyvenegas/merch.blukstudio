"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { LayoutGroup, MotionConfig } from "framer-motion";
import { Header } from "@/components/header";

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<null>(null);
  const [_, startTransition] = useTransition();

  const handleBack = useCallback(() => {
    startTransition(() => {
      setSelectedProduct(null);
      window.history.pushState(null, "", "/");
    });
  }, []);

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 120, damping: 20 }}>
      <LayoutGroup>
        <div className="flex flex-col min-h-screen bg-white">
          <Header isBackVisible={false} onBack={handleBack} />

          <main className="flex-grow flex items-center justify-center p-4">
            <img
              src="/mantenimiento.jpg"
              alt="Sitio en mantenimiento"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </main>
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
}
