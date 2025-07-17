import { Dispatch, ReactNode, SetStateAction } from "react";

export type Tags = {
  [name: string]: boolean;
};

export type SortTypes =
  | "popular"
  | "newest"
  | "highrating"
  | "shortest"
  | "longest";

export type SearchBarProps = {
  onSearch: (_text: string) => void;
  tags?: string[];
};

export type BottomModalProps = {
  children: ReactNode;
  title: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  onClose: () => void;
  onApply: () => void;
};

export type SortModalProps = {
  sortMode: SortTypes;
  setSortMode: Dispatch<SetStateAction<SortTypes>>;
};

export type FilterModalProps = {
  tags?: string[];
  chosenTags: Tags;
  setChosenTags: Dispatch<SetStateAction<Tags>>;
};
