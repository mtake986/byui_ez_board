import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Header, Main, NavBarBottom } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <NavBarBottom />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
