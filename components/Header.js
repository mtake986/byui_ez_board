import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import NeedRideList from "./needRideList/NeedRideList";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>BYUI ez Board</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    height: 60,
    paddingTop: 20,
    },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  }
});
