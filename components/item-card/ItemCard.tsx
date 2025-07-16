import { Image, Text, View } from "react-native";
import { ItemCardProps } from "./types";

const ItemCard = ({ title = "", subtitle = "" }: ItemCardProps) => {
  return (
    <View className="flex flex-col gap-y-4 w-[160px]">
      <Image
        height={90}
        width={160}
        source={require("@/assets/images/image-card.png")}
      />
      <View className="flex flex-col gap-y-0 w=[90%]">
        <Text className="text-xl text-primary font-semibold text-left">
          {title}
        </Text>
        <Text className="text-lg text-secondary">{subtitle}</Text>
      </View>
    </View>
  );
};

export default ItemCard;
