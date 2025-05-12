import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { LogoStyles } from "@/components/logo-styles/logo-styles";
import { CreateButton } from "@/components/create-button/create-button";
import { InputPrompt } from "@/components/input-prompt/input-prompt";
import { Chip } from "@/components/chip/chip";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase";
import { colors } from "@/constants/color";

const randomTextList = [
  "An elegant logo for Aria Consulting Group, with gold and black as the main colors",
  "A fierce and dynamic sports team logo for Iron Wolves, with a wolf mascot",
  "A stylish logo for Velvet Vogue, a modern fashion brand",
  "A blue lion logo reading ‘HEXA’ in bold letters",
];

export default function Prompt() {
  const [prompt, setPrompt] = useState<string>("");
  const [logoStyle, setLogoStyle] = useState<string>("No Style");
  const [status, setStatus] = useState("");

  const createPrompt = async () => {
    setStatus("creating");

    try {
      const docRef = await addDoc(collection(db, "prompts"), {
        prompt: prompt,
        status: "creating",
        style: logoStyle,
      });

      const unsub = onSnapshot(
        docRef,
        (docSnap) => {
          const data = docSnap.data();

          if (!data) return;

          if (data.status === "ready") {
            setStatus(data.status);

            unsub();
          }
        },
        (error) => {
          setStatus("error");
          console.log(error);
        },
      );
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  const setRandomPrompt = () => {
    setPrompt(
      randomTextList[Math.floor(Math.random() * randomTextList.length)],
    );
  };

  return (
    <LinearGradient
      colors={[colors.backgroundGradient1, colors.backgroundGradient2]} // Blue to purple
      start={{ x: 0, y: 0 }}
      end={{ x: 1.2, y: 0 }}
      style={{ flex: 1 }}
    >
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        {status && (
          <Chip prompt={prompt} logoStyle={logoStyle} state={status} />
        )}

        <View style={styles.container}>
          <Text style={styles.title}>Enter Your Prompt</Text>
          <TouchableOpacity onPress={setRandomPrompt}>
            <Text style={{ color: colors.textColor, fontSize: 13 }}>
              🎲 Surprise me
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 10 }}></View>

        <InputPrompt prompt={prompt} setPrompt={setPrompt}></InputPrompt>

        <View style={{ paddingTop: 24 }}></View>

        <LogoStyles logoStyle={logoStyle} setLogoStyle={setLogoStyle} />

        <View style={{ flex: 1 }}></View>

        <CreateButton
          disabled={prompt === ""}
          onPress={async () => {
            await createPrompt();
          }}
        />

        <View style={{ paddingBottom: 33 }}></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  title: { color: colors.textColor, fontSize: 20, fontWeight: "bold" },
});
