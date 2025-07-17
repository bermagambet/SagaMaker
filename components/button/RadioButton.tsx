import clsx from "clsx";
import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { IconSymbol } from "../ui";
import { RadioButtonProps } from "./types";

const RadioButton = ({ children, radioStatus, onPress }: RadioButtonProps) => {
  const iconProps = useMemo<{
    name: "radio-button-on" | "radio-button-off";
    color: "#e82630" | "#b89e9e";
  }>(
    () => ({
      name: radioStatus ? "radio-button-on" : "radio-button-off",
      color: radioStatus ? "#e82630" : "#b89e9e",
    }),
    [radioStatus]
  );

  return (
    <Pressable
      onPress={(e) => {
        onPress?.(e);
      }}
    >
      <View
        className={`${clsx({
          "border-action-primary": radioStatus,
          "border-secondary": !radioStatus,
        })} flex flex-row justify-between self-center w-full border border-solid rounded-xl px-[15px] py-[10px]`}
      >
        <Text
          className={`${clsx({
            "text-action-primary": radioStatus,
            "text-primary": !radioStatus,
          })} text-2xl font-light`}
        >
          {children}
        </Text>
        <IconSymbol className="my-[auto]" size={28} {...iconProps} />
      </View>
    </Pressable>
  );
};

export default RadioButton;
