import { Fragment, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button, RadioButton } from "../button";
import { IconSymbol } from "../ui";
import BottomModal from "./BottomModal";
import { SearchBarProps } from "./types";

const SearchBar = ({ onSearch, tags = [] }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

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
        children={
          <Fragment>
            <RadioButton children="Most Popular" onPress={() => {}} />
            <RadioButton children="Newest" onPress={() => {}} />
            <RadioButton children="Highest Rated" onPress={() => {}} />
            <RadioButton children="Shortest" onPress={() => {}} />
            <RadioButton children="Longest" onPress={() => {}} />
          </Fragment>
        }
        showModal={showSortModal}
        setShowModal={setShowSortModal}
        title="Sort By"
        onClose={() => {}}
        onApply={() => {
          setShowSortModal(false);
        }}
      />
      <BottomModal
        children={
          <Fragment>
            <View className="flex flex-col gap-y-[8px]">
              <Text className="text-primary text-2xl font-semibold">
                Length (Words)
              </Text>
              <View className="flex flex-row justify-between">
                <View className="flex flex-col gap-y-[4px] w-[47%] ">
                  <Text className="text-primary text-xl">From</Text>
                  <TextInput
                    className="text-lg text-primary bg-action-secondary rounded-2xl px-[10px]"
                    placeholderTextColor="#b89e9e"
                    placeholder="0"
                  />
                </View>
                <View className="flex flex-col gap-y-[4px] w-[47%] ">
                  <Text className="text-primary text-xl">To</Text>
                  <TextInput
                    className="text-lg text-primary bg-action-secondary rounded-2xl px-[10px]"
                    placeholderTextColor="#b89e9e"
                    placeholder="1,000,000"
                  />
                </View>
              </View>
            </View>
            <View className="flex flex-col gap-y-[8px]">
              <Text className="text-primary text-2xl font-semibold">
                Publish Date
              </Text>
              <View className="flex flex-row justify-between">
                <View className="flex flex-col gap-y-[4px] w-[47%] ">
                  <Text className="text-primary text-xl">Start Date</Text>
                  <TextInput
                    className="text-lg text-primary bg-action-secondary rounded-2xl px-[10px]"
                    placeholderTextColor="#b89e9e"
                    placeholder="MM/DD/YYYY"
                  />
                </View>
                <View className="flex flex-col gap-y-[4px] w-[47%] ">
                  <Text className="text-primary text-xl">End Date</Text>
                  <TextInput
                    className="text-lg text-primary bg-action-secondary rounded-2xl px-[10px]"
                    placeholderTextColor="#b89e9e"
                    placeholder="MM/DD/YYYY"
                  />
                </View>
              </View>
            </View>
            <View className="flex flex-col gap-y-[8px]">
              <Text className="text-primary text-2xl font-semibold">Tags</Text>
              <View className="flex flex-row flex-wrap gap-x-[8px] gap-y-[8px]">
                {tags?.map((el) => (
                  <Button key={el} children={el} onPress={() => {}} />
                ))}
              </View>
            </View>
          </Fragment>
        }
        showModal={showFilterModal}
        setShowModal={setShowFilterModal}
        title="Filter By"
        onClose={() => {}}
        onApply={() => {
          setShowFilterModal(false);
        }}
      />
    </View>
  );
};

export default SearchBar;
