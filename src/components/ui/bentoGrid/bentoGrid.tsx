import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const BentoGrid = forwardRef<HTMLDivElement, Props>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
        className,
      )}
    >
      {children}
    </div>
  ),
);

BentoGrid.displayName = "bento-grid";

export default BentoGrid;
