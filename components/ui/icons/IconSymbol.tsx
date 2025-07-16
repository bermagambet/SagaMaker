import { Ionicons } from "@expo/vector-icons";
import type { IconSymbol as IconSymbolType } from "./types";

const IconSymbol: IconSymbolType = ({
  name,
  size = 24,
  color,
  style,
  className,
}) => (
  <Ionicons
    color={color}
    size={size}
    name={name}
    style={style}
    className={className}
  />
);

export default IconSymbol;
