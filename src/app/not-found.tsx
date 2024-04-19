import Image from "next/image";
import React from "react";
import NarutoFace from "../../public/assests/narutoface.gif";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 text-center md:p-8">
      <p>
        What are you doing here? I did not spend enough time designing the not
        found page.
      </p>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Please go back home
      </Link>
      <Image src={NarutoFace} alt="loading" />
    </div>
  );
};

export default NotFound;
