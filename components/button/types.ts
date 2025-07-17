import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type ButtonProps = {
  children: ReactNode | string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  type?: "primary" | "secondary";
  active?: boolean;
  fullWidth?: boolean;
};

export type RadioButtonProps = {
  children: ReactNode | string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};
