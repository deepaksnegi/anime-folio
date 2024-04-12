import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import ThemeProvider from "@/lib/provider/ThemeProvider";
import ReactQueryProvider from "@/lib/provider/ReactQueryProvider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getAnimeList } from "@/lib/services/animeService";
import { APIType } from "@/types/AnimeResponse";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Folio",
  description: "Track what you like",
};

const staleTime = 10 * 60 * 1000;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["popularAnime", "airing", 10, undefined],
    queryFn: ({ pageParam }) =>
      getAnimeList({ pageParam, filter: "airing", limit: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: APIType) => {
      const nextPage = lastPage.pagination.has_next_page
        ? lastPage.pagination.current_page + 1
        : undefined;
      return nextPage;
    },
    staleTime,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["popularAnime", "airing", 5, undefined],
    queryFn: ({ pageParam }) =>
      getAnimeList({ pageParam, filter: "airing", limit: 5 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: APIType) => {
      const nextPage = lastPage.pagination.has_next_page
        ? lastPage.pagination.current_page + 1
        : undefined;
      return nextPage;
    },
    staleTime,
  });

  //TODO: Remove or optimize the cache key
  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["popularAnime", "bypopularity", 5, undefined],
  //   queryFn: ({ pageParam }) =>
  //     getAnimeList({ pageParam, filter: "bypopularity", limit: 5 }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage: APIType) => {
  //     const nextPage = lastPage.pagination.has_next_page
  //       ? lastPage.pagination.current_page + 1
  //       : undefined;
  //     return nextPage;
  //   },
  //   staleTime,
  // });

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["popularAnime", "favorite", 5, undefined],
  //   queryFn: ({ pageParam }) =>
  //     getAnimeList({ pageParam, filter: "favorite", limit: 5 }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage: APIType) => {
  //     const nextPage = lastPage.pagination.has_next_page
  //       ? lastPage.pagination.current_page + 1
  //       : undefined;
  //     return nextPage;
  //   },
  //   staleTime,
  // });

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["popularAnime", "upcoming", 5, undefined],
  //   queryFn: ({ pageParam }) =>
  //     getAnimeList({ pageParam, filter: "upcoming", limit: 10 }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage: APIType) => {
  //     const nextPage = lastPage.pagination.has_next_page
  //       ? lastPage.pagination.current_page + 1
  //       : undefined;
  //     return nextPage;
  //   },
  //   staleTime,
  // });

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["popularAnime", "movie", 12, undefined],
  //   queryFn: ({ pageParam }) =>
  //     getAnimeList({ pageParam, filter: "movie", limit: 12 }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage: APIType) => {
  //     const nextPage = lastPage.pagination.has_next_page
  //       ? lastPage.pagination.current_page + 1
  //       : undefined;
  //     return nextPage;
  //   },
  //   staleTime,
  // });

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["popularAnime", "ova", 12, undefined],
  //   queryFn: ({ pageParam }) =>
  //     getAnimeList({ pageParam, filter: "ova", limit: 12 }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage: APIType) => {
  //     const nextPage = lastPage.pagination.has_next_page
  //       ? lastPage.pagination.current_page + 1
  //       : undefined;
  //     return nextPage;
  //   },
  //   staleTime,
  // });

  // await queryClient.prefetchInfiniteQuery({
  //   queryKey: ["popularAnime", "special", 12, undefined],
  //   queryFn: ({ pageParam }) =>
  //     getAnimeList({ pageParam, filter: "special", limit: 12 }),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage: APIType) => {
  //     const nextPage = lastPage.pagination.has_next_page
  //       ? lastPage.pagination.current_page + 1
  //       : undefined;
  //     return nextPage;
  //   },
  //   staleTime,
  // });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider defaultTheme="dark" enableSystem attribute="class">
            <Sidebar />
            <HydrationBoundary state={dehydrate(queryClient)}>
              <main className="pt-16">
                {children}
                <Toaster />
              </main>
            </HydrationBoundary>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
