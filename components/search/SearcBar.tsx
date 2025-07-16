import { useState } from "react";
import { TextInput, View } from "react-native";
import { Button } from "../button";
import { IconSymbol } from "../ui";
import { SearchBarProps } from "./types";

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleOnSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

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
        <Button fullWidth={false}>Sort</Button>
        <Button fullWidth={false}>Filter</Button>
      </View>
    </View>
  );
};

export default SearchBar;
