import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function MockPage() {
  const local = useLocalSearchParams();
  const { name, profession, difficulty, beh, yourSelectedLanguage } = local;

  console.log(name);

  return (
    <View>
      <Text style={{ color: "white" }}>{local.mock}</Text>
      <Text style={{ color: "white" }}>{name}</Text>
      <Text style={{ color: "white" }}>{profession}</Text>
      <Text style={{ color: "white" }}>{difficulty}</Text>
      <Text style={{ color: "white" }}>{beh}</Text>
      <Text style={{ color: "white" }}>{yourSelectedLanguage}</Text>
    </View>
  );
}
