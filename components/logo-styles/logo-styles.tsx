import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Dispatch, SetStateAction, useState } from "react";
import { Text } from "@/components/text/text";
import { colors } from "@/constants/color";

const logos = [
  {
    image: require("../../assets/images/no-style.png"),
    title: "No Style",
  },
  {
    image: require("../../assets/images/monogram.png"),
    title: "Monogram",
  },
  {
    image: require("../../assets/images/abstract.png"),
    title: "Abstract",
  },
  {
    image: require("../../assets/images/mascot.png"),
    title: "Mascot",
  },
];

interface LogoStylesProps {
  logoStyle: string;
  setLogoStyle: Dispatch<SetStateAction<string>>;
}

export const LogoStyles = ({ logoStyle, setLogoStyle }: LogoStylesProps) => {
  const [isClicked, setIsClicked] = useState<number>(0);
  return (
    <View>
      <Text style={styles.title}>Logo Styles</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {logos.map((l, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setIsClicked(index);
                setLogoStyle(l.title);
              }}
            >
              <Image
                source={l.image}
                style={[
                  styles.image,
                  isClicked === index && {
                    borderWidth: 2,
                    borderColor: "white",
                  },
                ]}
              ></Image>
              <Text style={styles.text}>{l.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 12 },
  title: {
    fontSize: 20,
    color: colors.textColor,
    fontWeight: 800,
    paddingBottom: 12,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 16,
  },
  text: {
    color: colors.secondaryTextColor,
    textAlign: "center",
    paddingTop: 6,
  },
});
