// import {
//   TouchableNativeFeedbackProps,
//   TouchableOpacityProps,
// } from "react-native";

import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

// export type ButtonProps = Pick<
//   TouchableNativeFeedbackProps & TouchableOpacityProps,
//   | "accessibilityLabel"
//   | "accessibilityState"
//   | "hasTVPreferredFocus"
//   | "nextFocusDown"
//   | "nextFocusForward"
//   | "nextFocusLeft"
//   | "nextFocusRight"
//   | "nextFocusUp"
//   | "testID"
//   | "disabled"
//   | "onPress"
//   | "touchSoundDisabled"
// > & {
//   title: string;
//   danger?: boolean;
//   primary?: boolean;
//   secondary?: boolean;
//   // color?: ColorValue | undefined;
// };

export type ButtonProps = {
  children: ReactNode | string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  type?: "primary" | "secondary";
  fullWidth?: boolean;
  // color?: ColorValue | undefined;
};
