import { Redirect } from "expo-router";
import { useFonts } from "expo-font";

const Index = () => {
  useFonts({
    Manrope: require("../assets/fonts/Manrope-VariableFont_wght.ttf"),
  });
  return <Redirect href="/prompt" />;
};

export default Index;
