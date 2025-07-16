import { Author } from "@/types";

export type ItemCardProps = {
  title: string;
  subtitle: string;
};

export type ItemCardExpandedProps = ItemCardProps & {
  tags: string[];
  author: Author;
  likes: number;
  longevity: "Long" | "Very long" | "Medium" | "Short" | "Unknown";
};
