import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Create from './Create/Create';

export default function MenuBarBottom() {

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
          <FontAwesome5 name={"user"} style={styles.flexItem} />
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
	// Footer 
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: "10%",
    backgroundColor: "rgb(160, 212, 237)",
  },
  flexItem: {
    color: "rgb(0, 110, 182)",
    padding: 10,
    fontSize: "20px",
  },

	// Related to Modal
  modalOpenBtn: {
    borderRadius: 5,
    padding: 7,
    margin: 10,
    width: 100,
  },
  needBtn: {
    backgroundColor: "rgb(206,58,52)",
  },
  giveBtn: {
    backgroundColor: "rgb(0, 122, 255)",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  }

});
