import { SymbolView } from "expo-symbols";
import { IconSymbolIos } from "./types";

const IconSymbol: IconSymbolIos = ({
  name,
  size = 24,
  color,
  style,
  weight = "regular",
  className,
}) => (
  <SymbolView
    weight={weight}
    tintColor={color}
    resizeMode="scaleAspectFit"
    name={name}
    style={[
      {
        width: size,
        height: size,
      },
      style,
    ]}
    className={className}
  />
);

export default IconSymbol;
