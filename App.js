import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Header, Main, NavBarBottom, Footer } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <NavBarBottom />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
