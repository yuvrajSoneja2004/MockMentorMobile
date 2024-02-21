import { FlatList, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import RecentChat from "@/components/ui/RecentChat";
import { Link, useRootNavigationState, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import CharacterCard from "@/components/ui/CharacterCard";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading";
import {
  FredokaOne_400Regular,
  useFonts,
} from "@expo-google-fonts/fredoka-one";
import {
  AntDesign,
  Entypo,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DropDown from "react-native-paper-dropdown";
import {
  AVAILABLE_LANGUAGES,
  CHARACTER_CATEGORIES,
  DIFFICULTY_LEVELS,
  INTERVIEWER_BEHIEVIOR,
  professions,
} from "@/utils/categoriesList";
export default function TabOneScreen() {
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);
  const [showDiffDropDown, setShowDiffDropDown] = useState<boolean>(false);
  const [showLangDropdown, setShowlangDropdown] = useState<boolean>(false);
  const [showBehDropDown, setShowBehDropDown] = useState<boolean>(false);
  const [name, setName] = useState<string>("Name here");
  const [profession, setProfession] = useState<string>("Software Developer");
  const [difficulty, setDifficulty] = useState<string>("Medium");
  const [beh, setBeh] = useState<string>("Friendly");
  const [yourSelectedLanguage, setYourSelectedLanguage] =
    useState<String>("English");
  let [fontLoading] = useFonts({
    Roboto_500Medium,
    FredokaOne_400Regular,
  });

  if (!fontLoading) return <AppLoading />;

  type Props = {
    info: {
      charId: string;
      charAvatar: string;
      charName: string;
    };
  };

  return (
    <SafeAreaView style={{ ...styles.container, flex: 1 }}>
      <ScrollView style={{ width: "100%" }}>
        <Text
          style={{
            marginLeft: 5,
            marginTop: 5,
            marginBottom: 13,
            fontSize: 40,
            fontFamily: "FredokaOne_400Regular",
          }}
        >
          Start Mock Interview
        </Text>
        <View style={{ padding: 5, backgroundColor: "", marginTop: 10 }}>
          {/* Name field  */}
          <View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: "#2C3C49",
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
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
            <Text
              style={{
                fontFamily: "FredokaOne_400Regular",
                marginVertical: 12,
              }}
            >
              The name of the person who is giving the interview
            </Text>
            <TextInput
              label="e.g John Doe"
              value={name} // Use the value prop to reflect the value from the state
              onChangeText={(newText) => setName(newText)}
            />
          </View>
          {/* Profession  */}
          <View style={{ marginTop: 30 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: "#2C3C49",
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Fontisto name="female" size={24} color="#74C0FC" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontFamily: "FredokaOne_400Regular",
                }}
              >
                Profession
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "FredokaOne_400Regular",
                marginVertical: 12,
              }}
            >
              Select your profession (e.g: Software Developer)
            </Text>
            {/* <TextInput label="e.g Saitama" /> */}
            <DropDown
              mode={"outlined"}
              visible={showDropDown as boolean}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={profession}
              setValue={setProfession}
              list={CHARACTER_CATEGORIES}
              activeColor="black"
              dropDownItemStyle={{ backgroundColor: "black" }}
            />
          </View>
          {/* Difficulty  */}
          <View style={{ marginTop: 30 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: "#2C3C49",
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Ionicons
                  name="speedometer-outline"
                  size={24}
                  color="#74C0FC"
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontFamily: "FredokaOne_400Regular",
                }}
              >
                Difficulty
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "FredokaOne_400Regular",
                marginVertical: 12,
              }}
            >
              Select difficulty level of your mock
            </Text>
            <DropDown
              mode={"outlined"}
              visible={showDiffDropDown as boolean}
              showDropDown={() => setShowDiffDropDown(true)}
              onDismiss={() => setShowDiffDropDown(false)}
              value={difficulty}
              setValue={setDifficulty}
              list={DIFFICULTY_LEVELS}
              activeColor="black"
              dropDownItemStyle={{ backgroundColor: "black" }}
            />
          </View>
          {/* Language  */}
          <View style={{ marginTop: 30 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: "#2C3C49",
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Entypo name="language" size={24} color="#74C0FC" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontFamily: "FredokaOne_400Regular",
                }}
              >
                Language
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "FredokaOne_400Regular",
                marginVertical: 12,
              }}
            >
              Select interview language
            </Text>
            <DropDown
              mode={"outlined"}
              visible={showLangDropdown as boolean}
              showDropDown={() => setShowlangDropdown(true)}
              onDismiss={() => setShowlangDropdown(false)}
              value={yourSelectedLanguage}
              setValue={setYourSelectedLanguage}
              list={AVAILABLE_LANGUAGES}
              activeColor="black"
              dropDownItemStyle={{ backgroundColor: "black" }}
            />
          </View>
          {/* Interviewer Beheaviour  */}
          <View style={{ marginTop: 30 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: "#2C3C49",
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <MaterialCommunityIcons
                  name="head-cog-outline"
                  size={24}
                  color="#74C0FC"
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontFamily: "FredokaOne_400Regular",
                }}
              >
                Interviewer Behaviour
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "FredokaOne_400Regular",
                marginVertical: 12,
              }}
            >
              On the basis of select Behaviour , interview will be conducted
            </Text>
            <DropDown
              mode={"outlined"}
              visible={showBehDropDown as boolean}
              showDropDown={() => setShowBehDropDown(true)}
              onDismiss={() => setShowBehDropDown(false)}
              value={beh}
              setValue={setBeh}
              list={INTERVIEWER_BEHIEVIOR}
              activeColor="black"
              dropDownItemStyle={{ backgroundColor: "black" }}
            />
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginVertical: 25,
            }}
          >
            <Link
              href={{
                pathname: "/details",
                // /* 1. Navigate to the details route with query params */
                params: {
                  name,
                  profession,
                  difficulty,
                  beh,
                  yourSelectedLanguage,
                },
              }}
            >
              <Button
                mode="contained"
                style={{ width: "50%", paddingVertical: 7 }}
                labelStyle={{ fontSize: 18 }}
                icon={({ size, color }) => (
                  <Ionicons name="play" size={size + 2} color={color} />
                )}
              >
                Start
              </Button>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
