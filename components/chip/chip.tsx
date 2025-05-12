import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constants/color";

interface ChipProps {
  state: string;
  prompt: string;
  logoStyle: string;
}

export const Chip = ({ state, prompt, logoStyle }: ChipProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        state === "ready" &&
          router.replace({
            pathname: "/output",
            params: {
              prompt,
              logoStyle,
            },
          });
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {state === "creating" && (
          <View style={styles.statusIndicator}>
            <ActivityIndicator size="small" color="#FAFAFA"></ActivityIndicator>
          </View>
        )}
        {state === "ready" && (
          <Image
            source={require("../../assets/images/output.jpg")}
            style={styles.image}
          ></Image>
        )}
        {state === "error" && (
          <View style={styles.errorStatusIndicator}>
            <Text style={styles.errorIcon}>!</Text>
          </View>
        )}
        {state === "ready" && (
          <LinearGradient
            colors={[colors.blueGradient, colors.purpleGradient]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.readyContainer}
          >
            <Text style={styles.title}>Your Design is Ready!</Text>
            <Text style={styles.readyText}>Tap to see it.</Text>
          </LinearGradient>
        )}
        {state === "error" && (
          <View style={styles.errorContainer}>
            <>
              <Text style={styles.title}>Oops, something went wrong!</Text>
              <Text style={styles.errorText}>Click to try again.</Text>
            </>
          </View>
        )}
        {state === "creating" && (
          <View style={styles.container}>
            <>
              <Text style={styles.title}>Creating Your Design...</Text>
              <Text style={styles.text}>Ready in 60 seconds</Text>
            </>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  errorIcon: {
    fontSize: 48,
    color: colors.textColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  errorStatusIndicator: {
    backgroundColor: "rgb(232,124,124)",
    height: 70,
    width: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    justifyContent: "center",
  },
  statusIndicator: {
    backgroundColor: "#18181B",
    height: 70,
    width: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    justifyContent: "center",
  },
  title: {
    color: colors.textColor,
    fontWeight: 800,
    fontSize: 16,
  },
  text: {
    color: colors.secondaryTextColor,
    fontSize: 13,
    fontWeight: 500,
  },
  readyText: {
    color: colors.textColor,
    fontSize: 13,
    fontWeight: 500,
  },
  errorText: {
    color: colors.textColor,
    fontSize: 13,
    fontWeight: 500,
  },
  errorContainer: {
    flex: 1,
    height: 70,
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "#EF4444",
    justifyContent: "center",
  },
  readyContainer: {
    flex: 1,
    height: 70,
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    height: 70,
    padding: 12,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: colors.containerBackgroundColor,
    justifyContent: "center",
  },
});
