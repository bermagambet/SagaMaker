import { ItemCardExpanded, SearchBar } from "@/components";
import { Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { ItemCardExpandedProps } from "../../components/item-card/types";

type ItemsExpanded = {
  id: string | number;
} & ItemCardExpandedProps;

export default function MyCampaigns() {
  const [items, setItems] = useState<ItemsExpanded[]>([
    {
      id: 1,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
      ],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 2,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 12,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
      ],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 21,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 11,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
      ],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 22,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 111,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
      ],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 222,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 1111,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
        "Fantasy",
      ],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
    {
      id: 2222,
      title: "The Lost City of Eldoria",
      subtitle: "Last read: 2 days ago",
      tags: [],
      longevity: "Short",
      likes: 111,
      author: {
        id: 1,
        firstName: "Some",
        lastName: "Dude",
        fullName: "Alex Mercer",
        profileUrl: "",
      },
    },
  ]);
  return (
    <View className="flex col gap-y-24 px-[8px] py-[24px]">
      <Stack.Screen options={{ title: "My Campaigns" }} />
      <View className="flex flex-col gap-y-8">
        <SearchBar
          onSearch={() => {}}
          tags={[
            "Fantasy",
            "Sci-Fi",
            "Romance",
            "Thriller",
            "Detective",
            "Epic",
            "Mystery",
            "Urban",
          ]}
        />
        <ScrollView contentContainerClassName="flex flex-col gap-y-4">
          {items?.map(({ id, ...rest }) => (
            <ItemCardExpanded key={id} {...rest} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
