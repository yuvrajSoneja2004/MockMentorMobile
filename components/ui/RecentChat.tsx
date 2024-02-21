import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Link } from "expo-router";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import AppLoading from "expo-app-loading";

type Props = {
  info: {
    charId: string;
    charAvatar: string;
    charName: string;
  };
};
export default function RecentChat({ info }: Props) {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const { charId, charAvatar, charName } = info;
  let [fontLoading] = useFonts({
    FredokaOne_400Regular,
  });

  if (!fontLoading) return <AppLoading />;

  return (
    <Link href={"/(tabs)/createBot"} style={{ marginLeft: 5, marginRight: 5 }}>
      <TouchableOpacity>
        <Card style={{ width: 180 }}>
          <Card.Cover source={{ uri: charAvatar }} style={{ margin: 10 }} />
          <Card.Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              variant="titleMedium"
              style={{ fontFamily: "FredokaOne_400Regular" }}
            >
              {charName}
            </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}
