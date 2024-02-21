import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

interface Props {
  info: {
    role: string;
    name: string;
    content: string;
  };
}
export default function Chat({ info }: Props) {
  const { role, name, content } = info;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 10,
      }}
    >
      <Avatar.Image source={{ uri: "lol" }}></Avatar.Image>
      <View style={{ marginLeft: 15 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            maxWidth: 300,
            lineHeight: 22,
          }}
        >
          {content}
        </Text>
      </View>
    </View>
  );
}
