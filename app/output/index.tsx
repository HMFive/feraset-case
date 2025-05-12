import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import * as Clipboard from "expo-clipboard";
import { colors } from "@/constants/color";

export default function Output() {
  const { prompt, logoStyle } = useLocalSearchParams();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(prompt as string);
  };
  return (
    <LinearGradient
      colors={[colors.backgroundGradient1, colors.backgroundGradient2]} // Blue to purple
      start={{ x: 0, y: 0 }}
      end={{ x: 1.2, y: 0 }}
      style={{ flex: 1, paddingHorizontal: 24 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Your Design</Text>
        <TouchableOpacity
          onPress={() => {
            router.replace("/prompt");
          }}
        >
          <Text style={styles.title}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 6 }}></View>
      <Image
        source={require("../../assets/images/output.jpg")}
        style={styles.image}
      ></Image>
      <View style={{ paddingVertical: 12 }}></View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: 700 }}>
            Prompt
          </Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image
                style={{ height: 16, width: 16 }}
                source={require("../../assets/images/copy.png")}
              ></Image>
              <Text style={{ color: "white", fontSize: 15, fontWeight: 400 }}>
                Copy
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{prompt}</Text>
        <View style={styles.logoStyleTextContainer}>
          <Text style={styles.logoStyleText}>{logoStyle}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 342,
    alignSelf: "center",
    borderRadius: 16,
  },
  title: {
    fontSize: 22,
    color: colors.textColor,
    fontWeight: 800,
  },
  textContainer: {
    width: "100%",
    backgroundColor: colors.containerBackgroundColor,
    borderRadius: 12,
    padding: 12,
  },
  text: {
    color: colors.textColor,
    fontSize: 15,
    fontWeight: 400,
    paddingVertical: 12,
  },
  logoStyleTextContainer: {
    width: "30%",
    backgroundColor: "rgba(250, 250, 250, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    alignItems: "center",
  },
  logoStyleText: {
    color: "white",
    fontSize: 15,
    fontWeight: 400,
    textAlignVertical: "center",
  },
});
