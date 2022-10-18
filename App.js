import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import Header from "./components/Header";
import NeedRideList from "./components/needRideList/NeedRideList";

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <NeedRideList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
