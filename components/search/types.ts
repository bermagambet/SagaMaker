import { Dispatch, ReactNode, SetStateAction } from "react";

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
