import React, { useState } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { Link } from "expo-router";
import { axiosInstance } from "@/utils/axiosInstance";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      if (!email && !password && !nickname) {
        alert("Please enter email , nickname or password");
      } else {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await axiosInstance.post("YOUR_API_ENDPOINT", {
          nickname: nickname,
          email: email,
          password: password,
        });

        // Handle the response here (e.g., navigate to the next screen)
        console.log("Response:", response.data);
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/login.jpg")} // Replace with the path to your image
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 16,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 30, marginBottom: 20 }}>
              Create a account
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, marginBottom: 20 }}>
              Did't have a account?{" "}
              <Link
                href={"/(auth)/login"}
                style={{ color: "#1971C2", fontWeight: "bold" }}
              >
                Click here
              </Link>
            </Text>

            {/* Login form */}
            <View style={{ width: "100%" }}>
              <TextInput
                label="Nickname"
                left={<TextInput.Icon icon="email" />}
                style={{
                  backgroundColor: "#383838",
                  color: "white",
                  marginBottom: 8,
                }}
                value={nickname}
                onChangeText={(text) => setNickname(text)}
                disabled={isLoading}
              />
              <TextInput
                label="Email"
                left={<TextInput.Icon icon="email" />}
                style={{ backgroundColor: "#383838", color: "white" }}
                value={email}
                onChangeText={(text) => setEmail(text)}
                disabled={isLoading}
              />
              <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
                style={{
                  marginTop: 8,
                  backgroundColor: "#383838",
                  color: "white",
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                disabled={isLoading}
              />

              {/* Add a login button or any other form elements as needed */}
              <Button
                mode="contained"
                style={{ marginTop: 16, borderRadius: 5 }}
                onPress={handleLogin}
                loading={isLoading}
              >
                Register
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
