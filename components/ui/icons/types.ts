import { Ionicons } from "@expo/vector-icons";
import type { SymbolViewProps, SymbolWeight } from "expo-symbols";
import type { JSX } from "react";
import type {
  OpaqueColorValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export type IconSymbolIos = (_args: {
  name: SymbolViewProps["name"];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  className?: string;
}) => JSX.Element;

export type IconSymbol = (_args: {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
  className?: string;
}) => JSX.Element;
