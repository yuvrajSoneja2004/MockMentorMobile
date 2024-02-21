// CustomTheme.js
import { DefaultTheme } from "react-native-paper";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1971C2", // Change the primary color
    accent: "#fff", // Change the accent color
    text: "#fff", // Change the default text color
    placeholder: "#fff", // Change the placeholder text color
  },
};

export default CustomTheme;
