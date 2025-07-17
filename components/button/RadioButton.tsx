import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { IconSymbol } from "../ui";
import { RadioButtonProps } from "./types";

const RadioButton = ({ children, onPress }: RadioButtonProps) => {
  const [radioStatus, setRadioStatus] = useState<boolean>(false);

  return (
    <View className="flex flex-row justify-between self-center w-full border border-solid border-secondary rounded-xl px-[15px] py-[10px]">
      <Text className="text-primary text-2xl font-light">{children}</Text>
      <Pressable
        className="justify-self-end"
        onPress={(e) => {
          onPress?.(e);
          setRadioStatus((prev) => !prev);
        }}
      >
        <IconSymbol
          className="my-[auto]"
          size={28}
          name={radioStatus ? "radio-button-on" : "radio-button-off"}
          color="#b89e9e"
        />
      </Pressable>
    </View>
  );
};

export default RadioButton;
