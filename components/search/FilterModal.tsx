import { Fragment } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "../button";
import { FilterModalProps } from "./types";

const FilterModal = ({ tags, chosenTags, setChosenTags }: FilterModalProps) => {
  return (
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
            <Button
              key={el}
              children={el}
              onPress={() =>
                setChosenTags((prev) => ({
                  ...prev,
                  [el]: !Boolean(prev[el]),
                }))
              }
              active={chosenTags?.[el]}
            />
          ))}
        </View>
      </View>
    </Fragment>
  );
};

export default FilterModal;
