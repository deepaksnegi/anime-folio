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

type Props = {};

const SuggestionCard = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Some anime name</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sunt
          aut debitis deleniti tenetur odit sed dolores saepe minus. Ipsam
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
          alt="anime"
          className="object-cover"
          height={500}
          width={500}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardContent>
      <CardFooter>
        <p>Text</p>
      </CardFooter>
    </Card>
  );
};

export default SuggestionCard;
