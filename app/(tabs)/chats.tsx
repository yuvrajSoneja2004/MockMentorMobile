import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Text } from "react-native-paper";
import { Link } from "expo-router";

export default function chats() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            {" "}
            Continue Chatting
          </Text>
          <TouchableOpacity>
            <Button mode="contained" icon={"delete"}>
              Clear History
            </Button>
          </TouchableOpacity>
        </View>
        {/* Recent chats history  */}
        <View style={{ paddingLeft: 20, marginTop: 20 }}>
          <Link href={"/"}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 15,
              }}
            >
              <Avatar.Image
                source={{ uri: "https://i.pravatar.cc/300" }}
                size={70}
              ></Avatar.Image>
              <Text style={{ fontSize: 16, color: "#fff" }}>Saitama</Text>
            </View>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
