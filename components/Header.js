
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>BYUI Hub</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(0, 110, 182)",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Cochin",
    fontWeight: "bold",
  },
});
