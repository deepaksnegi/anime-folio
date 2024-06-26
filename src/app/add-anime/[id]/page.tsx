"use client";

import React, { useEffect, useMemo } from "react";
import { useGetAnimeById, useGetAnimeEpisodes } from "@/lib/hooks/animeHook";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/loaders/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

type Props = { params: { id: string } };

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .optional(),
  status: z.string().min(2, {
    message: "Status must be at least 2 characters.",
  }),
  lastSeason: z.number(),
  lastEpisode: z.string(),
  userRating: z.number(),
  like: z.string().nullable().optional(),
});

const WATCHING_STATUS = ["Watching", "Hold", "Wishlist", "Drop"];

const AddAnimePage = ({ params }: Props) => {
  const { id } = params;
  const { data, isLoading, error } = useGetAnimeById(id);
  const animeEpisodes = useGetAnimeEpisodes(id);

  const episodes = animeEpisodes.data?.map((episode) => episode.title);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      status: "",
    },
    mode: "onChange",
  });

  const { control, handleSubmit } = form;

  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  if (isLoading) {
    return <Loader />;
  }

  const image =
    data?.trailer.images.maximum_image_url ??
    data?.images.webp.large_image_url!;

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="relative h-full w-full cursor-pointer">
        <Image
          src={image}
          alt="anime"
          className="rounded-lg object-cover md:rounded-2xl"
          quality={100}
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anime Name</FormLabel>
                <FormControl>
                  <Input placeholder="" disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Watching Status </FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {WATCHING_STATUS?.map((status) => (
                      <SelectItem value={status} key={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastSeason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Watched Season </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastEpisode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Watched Episodes </FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select episode" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {animeEpisodes.data?.map((episode) => (
                      <SelectItem
                        value={episode.mal_id.toString()}
                        key={episode.mal_id}
                      >
                        {episode.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="userRating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Rating </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="like"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What you like most </FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="What you like" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="Story">Story</SelectItem>
                    <SelectItem value="Characters">Characters</SelectItem>
                    <SelectItem value="Story Narration Style">
                      Story Narration Style
                    </SelectItem>
                    <SelectItem value="Character Development">
                      Character Development
                    </SelectItem>
                    <SelectItem value="Animation Style">
                      Animation Style
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddAnimePage;
