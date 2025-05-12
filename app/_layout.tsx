import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/color";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={[colors.backgroundGradient1, colors.backgroundGradient2]} // Blue to purple
            start={{ x: 0, y: 0 }}
            end={{ x: 1.2, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
        headerTitleStyle: { color: colors.textColor, fontSize: 17 },
        headerTitle: "AI Logo",
      }}
    >
      <Stack.Screen name={"prompt/index"}></Stack.Screen>
      <Stack.Screen
        name={"output/index"}
        options={{ headerTitle: "" }}
      ></Stack.Screen>
    </Stack>
  );
}
