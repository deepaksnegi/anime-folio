import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ratingToDescription = (rating: number) => {
  if (rating >= 1 && rating <= 2) return "Poor";

  if (rating >= 3 && rating <= 4) return "Fair";

  if (rating === 5) return "Average";

  if (rating >= 6 && rating <= 7) return "Good";

  if (rating >= 8 && rating < 9) return "Very Good";

  if (rating >= 9 && rating <= 10) return "Excellent";

  return "Unknown";
};
