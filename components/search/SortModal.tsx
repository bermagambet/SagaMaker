import { Fragment } from "react";
import { RadioButton } from "../button";
import { SortModalProps } from "./types";

const SortModal = ({ sortMode, setSortMode }: SortModalProps) => {
  return (
    <Fragment>
      <RadioButton
        children="Most Popular"
        onPress={() => setSortMode("popular")}
        radioStatus={sortMode === "popular"}
      />
      <RadioButton
        children="Newest"
        onPress={() => setSortMode("newest")}
        radioStatus={sortMode === "newest"}
      />
      <RadioButton
        children="Highest Rated"
        onPress={() => setSortMode("highrating")}
        radioStatus={sortMode === "highrating"}
      />
      <RadioButton
        children="Shortest"
        onPress={() => setSortMode("shortest")}
        radioStatus={sortMode === "shortest"}
      />
      <RadioButton
        children="Longest"
        onPress={() => setSortMode("longest")}
        radioStatus={sortMode === "longest"}
      />
    </Fragment>
  );
};

export default SortModal;
