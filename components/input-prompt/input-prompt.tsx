import { StyleSheet, TextInput, View } from "react-native";
import { Dispatch, SetStateAction, useState } from "react";
import { colors } from "@/constants/color";
import { Text } from "@/components/text/text";

interface InputPromptProps {
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
}

export const InputPrompt = ({ prompt, setPrompt }: InputPromptProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <View
      style={[
        styles.container,
        isFocused && { borderWidth: 1, borderColor: "white" },
      ]}
    >
      <TextInput
        multiline={true}
        placeholder={"A blue lion logo reading ‘HEXA’ in bold letters"}
        placeholderTextColor={colors.secondaryTextColor}
        maxLength={500}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setCount(e.nativeEvent.text.length)}
        value={prompt}
        onChangeText={setPrompt}
        style={styles.input}
      />
      <Text style={styles.text}>{count}/500</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.containerBackgroundColor,
    height: 200,
    borderRadius: 16,
    padding: 12,
    maxHeight: 300,
    justifyContent: "space-between",
  },
  input: { height: 150, padding: 0, margin: 0, fontSize: 16, color: "white" },
  text: { color: colors.secondaryTextColor },
});
