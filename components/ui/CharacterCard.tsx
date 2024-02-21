import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { Link } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import AppLoading from "expo-app-loading";

export default function CharacterCard({ info }) {
  let [fontLoading] = useFonts({
    FredokaOne_400Regular,
  });

  if (!fontLoading) return <AppLoading />;

  return (
    <TouchableOpacity style={{ marginLeft: 0, marginRight: 0 }}>
      <Card style={{ width: 180, height: 310 }}>
        <Card.Cover
          source={{
            uri: "https://static.wikia.nocookie.net/onepunchman/images/8/81/Saitama_Anime_Profile.png/revision/latest?cb=20161002154538",
          }}
          style={{ margin: 10 }}
        />
        <Card.Content
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            variant="titleMedium"
            style={{ fontSize: 20, fontFamily: "FredokaOne_400Regular" }}
          >
            {info ? info.name : "Undefined"}
          </Text>
          <Text
            variant="titleSmall"
            style={{
              textAlign: "center",
              lineHeight: 13,
              marginTop: 5,
              fontSize: 12,
              fontFamily: "FredokaOne_400Regular",
            }}
          >
            {info ? info.greeting : "Undefined"}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: 14,
            }}
          >
            <Link href={"/"} style={{ fontFamily: "FredokaOne_400Regular" }}>
              @yash
            </Link>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto name="hipchat" size={17} color="black" />
              <Text
                style={{ marginLeft: 4, fontFamily: "FredokaOne_400Regular" }}
              >
                3
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
