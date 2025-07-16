import { Image, Text, View } from "react-native";
import { IconSymbol } from "../ui";
import { ItemCardExpandedProps } from "./types";

const ItemCardExpanded = ({
  title = "",
  subtitle = "",
  tags = [],
  author,
  likes = 0,
  longevity = "Unknown",
}: ItemCardExpandedProps) => {
  return (
    <View className="flex flex-row gap-x-4 gap-y-4 w-full">
      <View className="flex flex-col gap-y-0 w-[70%]">
        <Text className="text-lg text-secondary">{subtitle}</Text>
        <Text className="text-xl text-primary font-semibold text-left">
          {title}
        </Text>
        <View className="flex flex-row flex-wrap gap-y-0 gap-x-1">
          <View className="flex flex-row gap-y-0 gap-x-1">
            <Text className="text-lg text-secondary">{`By ${
              author?.fullName ?? "Unknown author"
            }`}</Text>
            <IconSymbol
              className="my-[auto]"
              size={14}
              name="git-commit"
              color="#b89e9e"
            />
          </View>
          <View className="flex flex-row gap-y-0 gap-x-1">
            <Text className="text-lg text-secondary">{`${likes} Likes`}</Text>
            <IconSymbol
              className="my-[auto]"
              size={14}
              name="git-commit"
              color="#b89e9e"
            />
          </View>
          <View className="flex flex-row gap-y-0 gap-x-1">
            <Text className="text-lg text-secondary">{`Length: ${longevity}`}</Text>
            <IconSymbol
              className="my-[auto]"
              size={14}
              name="git-commit"
              color="#b89e9e"
            />
          </View>
          <Text className="text-lg text-secondary">
            {`Genre: ${tags?.[0] ?? "Unknown"}`}
          </Text>
        </View>
      </View>
      <Image
        className="w-[30%]"
        height={90}
        source={require("@/assets/images/image-card.png")}
      />
    </View>
  );
};

export default ItemCardExpanded;
