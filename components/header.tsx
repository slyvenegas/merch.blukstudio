"use client";

import { MainMenu } from "./main-menu";
import { Cart } from "./cart";
import { useState } from "react";
import { useCart } from "./cart-context";

interface HeaderProps {
  isBackVisible: boolean;
  onBack: any;
}

export function Header({ isBackVisible, onBack }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between py-0 px-5 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex items-center">
        <a href="https://www.blukstudio.com/">
          <img
            src="images/bluk-logo-y.png"
            alt="Bluk* Logo-y"
            className="w-auto h-20 mb-2"
          />
        </a>
        <MainMenu isBackVisible={isBackVisible} onBack={onBack} />
      </div>

      <div className="flex justify-center flex-1">
        <a href="/">
          <img src="images/va-icon.png" alt="VAmerch" className="h-12" />
        </a>
      </div>

      <div className="flex items-center">
        <a
          href="https://www.instagram.com/blukstudio/"
          aria-label="Instagram"
          className="mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/inst_header.svg"
            alt="BlukStudio* Instagram"
            className="w-auto h-6 "
          />
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-20 size-12 flex items-center justify-center"
          aria-label="Cart"
        >
          <svg
            className="size-6"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="8"
              width="12"
              height="10"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></rect>
            <path
              d="M9 7V7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
          <span className="ml-1 font-semibold">{totalQuantity}</span>
        </button>
        <Cart isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
}
