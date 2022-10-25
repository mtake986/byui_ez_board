import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Create from "./Create/Create";

export default function NavBarBottom() {
  return (
    <View style={styles.container}>
      {/* Home */}
      <View>
        <TouchableOpacity onPress={() => alert("clicked: home")}>
          <FontAwesome5 name={"home"} style={styles.flexItem} />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View>
        <TouchableOpacity onPress={() => alert("clicked: search")}>
          <FontAwesome5 name={"search"} style={styles.flexItem} />
        </TouchableOpacity>
      </View>

      {/* Create */}
      <Create />

      {/* Profile */}
      <View>
        <TouchableOpacity onPress={() => alert("clicked: menu")}>
          <FontAwesome5 name={"user"} style={styles.flexItem} solid />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {/* <View>
        <TouchableOpacity onPress={() => alert("clicked: menu")}>
          <FontAwesome5 name={"bars"} style={styles.flexItem} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(228, 241, 247)",
  },
  flexItem: {
    color: "rgb(0, 110, 182)",
    padding: 10,
    fontSize: "28px",
  },
});
