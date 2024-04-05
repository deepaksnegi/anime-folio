import { LoaderIcon } from "lucide-react";
import React from "react";

interface Props {
  showDialog?: boolean;
}
const Loader = ({ showDialog }: Props) => {
  return (
    <div className="flex h-full w-full  items-center justify-center gap-5">
      <LoaderIcon size={30} className="animate-spin " />
      <h4>
        Loading...{showDialog ? "It's not a filler episode, we promise!" : null}
      </h4>
    </div>
  );
};

export default Loader;
