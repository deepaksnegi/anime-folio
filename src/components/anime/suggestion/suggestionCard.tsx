import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Props = {};

const SuggestionCard = (props: Props) => {
  return (
    <Card>
      <CardHeader className="p-0">
        <Image
          src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
          alt="anime"
          className="rounded-lg object-cover"
          height={500}
          width={500}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="pt-0">
        <CardTitle className="p-0 text-lg font-normal">
          Attack On Titan
        </CardTitle>
      </CardFooter>
    </Card>
  );
};

export default SuggestionCard;
