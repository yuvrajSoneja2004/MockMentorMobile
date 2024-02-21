import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {
  AntDesign,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Slider from "@react-native-community/slider";
import { Avatar, Button, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { CHARACTER_CATEGORIES } from "@/utils/categoriesList";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import AppLoading from "expo-app-loading";

// Functional component for the character creation page
function createBot() {
  // State variables
  const [spinner, setSpinner] = useState(false);
  const [renderController, setRenderController] = useState(1);
  const [image, setImage] = useState("https://i.pravatar.cc/300");
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState<string>("");
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  let [fontLoading] = useFonts({
    FredokaOne_400Regular,
  });

  if (!fontLoading) return <AppLoading />;
  // Handler for file input change
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Handler for form submission
  const handleForm = async () => {
    // Implement form submission logic for React Native
    // You can use fetch or axios for making API calls
  };

  // JSX structure for the component
  return (
    <ScrollView>
      <View style={{ padding: 20, backgroundColor: "" }}>
        {/* Name field  */}
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                backgroundColor: "#2C3C49",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <AntDesign name="user" size={24} color="#74C0FC" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Name
            </Text>
          </View>
          <Text style={{ fontFamily: "FredokaOne_400Regular" }}>
            The nam of the character you want to create.
          </Text>
          <TextInput label="e.g Saitama" />
        </View>
        {/* Category  */}
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                backgroundColor: "#2C3C49",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Ionicons name="grid-outline" size={24} color="#74C0FC" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Category
            </Text>
          </View>
          <Text style={{ fontFamily: "FredokaOne_400Regular" }}>
            Select the category of your bot (e.g: Anime)
          </Text>
          {/* <TextInput label="e.g Saitama" /> */}
          <DropDown
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={gender}
            setValue={setGender}
            list={CHARACTER_CATEGORIES}
            activeColor="black"
            dropDownItemStyle={{ backgroundColor: "black" }}
          />
        </View>
        {/* Greeting field  */}
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                backgroundColor: "#2C3C49",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <FontAwesome name="hand-peace-o" size={24} color="#74C0FC" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Greeting
            </Text>
          </View>
          <Text style={{ fontFamily: "FredokaOne_400Regular" }}>
            The nam of the character you want to create.
          </Text>
          <TextInput
            label="e.g Saitama"
            multiline
            numberOfLines={6}
            style={{ fontFamily: "FredokaOne_400Regular" }}
          />
        </View>
        {/* Avatar Wala  */}
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                backgroundColor: "#2C3C49",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <FontAwesome5 name="user-circle" size={24} color="#74C0FC" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Avatar
            </Text>
          </View>
          <Text style={{ fontFamily: "FredokaOne_400Regular" }}>
            The nam of the character you want to create.
          </Text>
        </View>
        {/* Avatar Selection */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Avatar</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Avatar.Image
              size={100}
              source={{
                uri: image,
              }}
            />

            <TouchableOpacity
              onPress={pickImage}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button icon={"upload"} mode="contained">
                {image == "https://i.pravatar.cc/300"
                  ? "Select Avatar"
                  : "Change Avatar"}
              </Button>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "dimgray",
              fontSize: 13,
              marginBottom: 5,
              marginTop: 3,
            }}
          >
            You can either let this app choose the avatar for you based on the
            name or you can select an avatar from the system.
          </Text>
        </View>

        {/* Emotions selection  */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#2C3C49",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <FontAwesome name="smile-o" size={24} color="#74C0FC" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Emotions
            </Text>
          </View>
          <Text style={{ fontFamily: "FredokaOne_400Regular" }}>
            The nam of the character you want to create.
          </Text>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Anger
            </Text>
            {/* // TODO: Increase thickness (height) of the sliders */}
            <Slider
              defaultValue={20}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#1971C2" // Change this color for the track before the thumb
              maximumTrackTintColor="#4A4A4A" // Change this color for the track after the thumb
              thumbTintColor="#fff" // Change this color for the thumb
              style={{ width: 200, height: 40 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Rudeness
            </Text>
            {/* // TODO: Increase thickness (height) of the sliders */}
            <Slider
              defaultValue={20}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#1971C2" // Change this color for the track before the thumb
              maximumTrackTintColor="#4A4A4A" // Change this color for the track after the thumb
              thumbTintColor="#fff" // Change this color for the thumb
              style={{ width: 200, height: 40 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Kindness
            </Text>
            {/* // TODO: Increase thickness (height) of the sliders */}
            <Slider
              defaultValue={20}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#1971C2" // Change this color for the track before the thumb
              maximumTrackTintColor="#4A4A4A" // Change this color for the track after the thumb
              thumbTintColor="#fff" // Change this color for the thumb
              style={{ width: 200, height: 40 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontFamily: "FredokaOne_400Regular",
              }}
            >
              Excitement
            </Text>
            {/* // TODO: Increase thickness (height) of the sliders */}
            <Slider
              defaultValue={20}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#1971C2" // Change this color for the track before the thumb
              maximumTrackTintColor="#4A4A4A" // Change this color for the track after the thumb
              thumbTintColor="#fff" // Change this color for the thumb
              style={{ width: 200, height: 40 }}
            />
          </View>
          <View style={{ width: "100%", marginTop: 13 }}>
            <Button mode="contained" loading={true}>
              Create Character
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default createBot;
