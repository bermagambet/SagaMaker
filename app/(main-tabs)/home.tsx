import { Button, ItemCard } from "@/components";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

type Item = {
  id: string | number;
  title: string;
  lastVisit: string;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: "The Lost City of Eldoria",
      lastVisit: "2 days ago",
    },
    {
      id: 2,
      title: "The Dragon's Lair",
      lastVisit: "a year ago",
    },
    {
      id: 3,
      title: "The Lost City of Eldoria",
      lastVisit: "2 days ago",
    },
    {
      id: 4,
      title: "The Dragon's Lair",
      lastVisit: "a year ago",
    },
  ]);

  return (
    <View className="flex col gap-y-24 px-[8px] py-[24px]">
      <View className="flex flex-col gap-y-8">
        <Text className="text-4xl font-bold text-primary">
          Continue Reading
        </Text>
        <ScrollView
          contentContainerClassName="flex flex-row gap-x-4"
          horizontal
        >
          {items?.map(({ id, title, lastVisit }) => (
            <ItemCard
              key={id}
              title={title}
              subtitle={`Last read: ${lastVisit}`}
            />
          ))}
        </ScrollView>
      </View>
      <View className="flex flex-col gap-y-8">
        <Text className="text-4xl font-bold text-primary">New Campaign</Text>
        <View className="flex flex-col gap-y-4">
          <Button
            children={"My Campaigns"}
            type="primary"
            onPress={() => {
              router.navigate({
                pathname: "/screens/my-campaigns",
              });
            }}
            fullWidth
          />
          <Button children={"Create Campaign"} fullWidth />
        </View>
      </View>
    </View>
  );
}
