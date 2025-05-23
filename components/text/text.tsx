import { Text as RNText, TextProps } from "react-native";

export const Text = (props: TextProps) => {
  return <RNText {...props} style={[{ fontFamily: "Manrope" }, props.style]} />;
};
