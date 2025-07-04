"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

export const MotionDiv = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & React.ComponentProps<typeof motion.div>
>((props, ref) => <motion.div ref={ref} {...props} />);

MotionDiv.displayName = "MotionDiv";
