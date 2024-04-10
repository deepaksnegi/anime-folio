import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";
import React from "react";

interface Props {
  showDialog?: boolean;
  className?: string;
}
const Loader = ({ showDialog, className }: Props) => {
  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      <LoaderIcon size={30} className="animate-spin" />
      <h4>
        Loading...{showDialog ? "It's not a filler episode, we promise!" : null}
      </h4>
    </div>
  );
};

export default Loader;
