import { useState } from "react";
import { TextInput, View } from "react-native";
import { Button } from "../button";
import { IconSymbol } from "../ui";
import BottomModal from "./BottomModal";
import FilterModal from "./FilterModal";
import SortModal from "./SortModal";
import { SearchBarProps, SortTypes, Tags } from "./types";

const SearchBar = ({ onSearch, tags = [] }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  const [sortMode, setSortMode] = useState<SortTypes>("popular");
  const [chosenTags, setChosenTags] = useState<Tags>({});

  const handleOnSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleOnSort = () => {};

  const handleOnFilter = () => {};

  return (
    <View className="flex flex-col gap-y-4">
      <View className="flex flex-row gap-x-2 justify-start self-center bg-action-secondary rounded-xl px-[8px] w-full">
        <IconSymbol
          className="my-[auto]"
          size={28}
          name="search"
          color="#b89e9e"
        />
        <TextInput
          className="text-lg text-primary bg-action-secondary rounded-2xl"
          placeholderTextColor="#b89e9e"
          placeholder="Search your campaigns"
          onChangeText={handleOnSearch}
          value={searchText}
        />
      </View>
      <View className="flex flex-row gap-x-2">
        <Button
          fullWidth={false}
          onPress={() => {
            setShowSortModal(true);
          }}
          active={showSortModal}
        >
          Sort
        </Button>
        <Button
          fullWidth={false}
          onPress={() => {
            setShowFilterModal(true);
          }}
          active={showFilterModal}
        >
          Filter
        </Button>
      </View>
      <BottomModal
        children={<SortModal sortMode={sortMode} setSortMode={setSortMode} />}
        showModal={showSortModal}
        setShowModal={setShowSortModal}
        title="Sort By"
        onClose={() => {}}
        onApply={() => {
          setShowSortModal(false);
          handleOnSort();
        }}
      />
      <BottomModal
        children={
          <FilterModal
            tags={tags}
            chosenTags={chosenTags}
            setChosenTags={setChosenTags}
          />
        }
        showModal={showFilterModal}
        setShowModal={setShowFilterModal}
        title="Filter By"
        onClose={() => {}}
        onApply={() => {
          setShowFilterModal(false);
          handleOnFilter();
        }}
      />
    </View>
  );
};

export default SearchBar;
