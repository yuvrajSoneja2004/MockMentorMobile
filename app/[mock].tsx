import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import Chat from "@/components/ui/Chat";

export default function MockPage() {
  const local = useLocalSearchParams();
  const { name, profession, difficulty, beh, yourSelectedLanguage } = local;
  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChat = async () => {
    setIsLoading(true);
    setText("");
    setChats((prev) => [
      ...prev,
      {
        role: "user",
        name: "User",
        content: text,
      },
    ]);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      {/* Header */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#74C0FC",
          height: 60,
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ flex: 1, textAlign: "center" }}>Back</Text>
        <Text style={{ flex: 1, textAlign: "center" }}>01:00</Text>
        <Text style={{ flex: 1, textAlign: "center" }}>{profession}</Text>
      </View>

      {/* Other content */}
      {/* <Text style={{ color: "white" }}>{local.mock}</Text>
      <Text style={{ color: "white" }}>{name}</Text>
      <Text style={{ color: "white" }}>{profession}</Text>
      <Text style={{ color: "white" }}>{difficulty}</Text>
      <Text style={{ color: "white" }}>{beh}</Text>
      <Text style={{ color: "white" }}>{beh}</Text>
      <Text style={{ color: "white" }}>{yourSelectedLanguage}</Text> */}

      <ScrollView style={{ flex: 1 }}>
        {chats.map((chat, index) => (
          <Chat info={chat} key={index} />
        ))}
      </ScrollView>

      {/* Chat input */}
      <View style={styles.chatInputContainer}>
        <TextInput
          value={text}
          placeholder="Enter input here..."
          onChangeText={(text) => setText(text)}
          style={styles.chatInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleChat}>
          <Ionicons name="send-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525", // Adjust the background color as needed
    paddingVertical: 5,
  },
  chatInput: {
    flex: 1,
    height: 40, // Adjust the height as needed
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "#e0e0e0", // Adjust the background color as needed
  },
  sendButton: {
    backgroundColor: "#74C0FC", // Adjust the background color as needed
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
