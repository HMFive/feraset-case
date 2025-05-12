import { StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { colors } from "@/constants/color";
import { Text } from "@/components/text/text";

interface CreateButtonProps {
  onPress(): void;
  disabled: boolean;
}

export const CreateButton = ({ onPress, disabled }: CreateButtonProps) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <LinearGradient
          colors={[colors.blueGradient, colors.purpleGradient]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, disabled && { opacity: 0.5 }]}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>Create</Text>
            <Image
              source={require("../../assets/images/stars.png")}
              style={styles.image}
            ></Image>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    borderRadius: 50,
    justifyContent: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    color: colors.textColor,
    fontSize: 17,
    fontWeight: 800,
    textAlign: "center",
  },
  image: {
    height: 20,
    width: 20,
  },
});
