import clsx from "clsx";
import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { ButtonProps } from "./types";

const primaryBg = "bg-action-primary";
const secondaryBg = "bg-action-secondary";

const hoverPrimary = "bg-action-primary/75";
const hoverSecondary = "bg-action-secondary/75";

const hoverText = "text-primary/75";

const fullContainer = "w-full rounded-full py-[10px]";
const fullText = "text-2xl font-semibold";

const defaultContainer = "rounded-xl py-[5px]";
const defaultText = "text-lg";

const Button = ({
  children,
  type,
  fullWidth = false,
  active = false,
  onPress,
}: ButtonProps) => {
  const [hoverStatus, setHoverStatus] = useState<boolean>(false);
  const isPrimary = useMemo(() => type === "primary", [type]);

  return (
    <Pressable
      className={`border-solid border-1 px-[15px] ${clsx({
        [primaryBg]: isPrimary,
        [secondaryBg]: !isPrimary,
        [isPrimary ? hoverPrimary : hoverSecondary]: active || hoverStatus,
        [fullContainer]: fullWidth,
        [defaultContainer]: !fullWidth,
      })}`}
      onPressIn={() => setHoverStatus(true)}
      onPressOut={() => setHoverStatus(false)}
      onPress={onPress}
    >
      <View className="flex flex-col justify-center self-center">
        <Text
          className={`text-primary ${clsx({
            [hoverText]: active || hoverStatus,
            [fullText]: fullWidth,
            [defaultText]: !fullWidth,
          })} `}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
