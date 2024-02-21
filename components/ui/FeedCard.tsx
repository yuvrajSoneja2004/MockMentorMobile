import { AntDesign, FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => (
  <Avatar.Image
    {...props}
    source={{
      uri: "https://static.wikia.nocookie.net/onepunchman/images/8/81/Saitama_Anime_Profile.png/revision/latest?cb=20161002154538",
    }}
  />
);
const FeedCard = () => (
  <Card style={{ width: "100%" }}>
    <Card.Title
      title="Saitama"
      subtitle="4 hours ago"
      left={LeftContent}
      subtitleStyle={{ fontSize: 11 }}
    />
    <Card.Content>
      <Text variant="titleMedium">I did jagan 😁</Text>
    </Card.Content>
    <View
      style={{
        width: "100%",
        height: 300,
        backgroundColor: "black",
        marginVertical: 5,
      }}
    >
      <Text>Jagan</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 5,
        marginBottom: 4,
      }}
    >
      <TouchableOpacity style={{ paddingHorizontal: 10 }} activeOpacity={0.5}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <AntDesign name="hearto" size={20} color="black" />
          <Text style={{ fontSize: 16 }}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 40 }} activeOpacity={0.5}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <FontAwesome name="comment-o" size={20} color="black" />
          <Text style={{ fontSize: 16 }}>6</Text>
        </View>
      </TouchableOpacity>
    </View>
  </Card>
);

export default FeedCard;
