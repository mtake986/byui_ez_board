import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";

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
