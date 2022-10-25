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
    backgroundColor: "rgb(0, 110, 182)",
    padding: 3,
  },
  text: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
});
