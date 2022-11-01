import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Masahiro Takechi All Rights Reserved 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    paddingBottom: 1,
  },
  text: {
    color: "black",
    fontSize: 10,
    textAlign: "center",
  },
});
