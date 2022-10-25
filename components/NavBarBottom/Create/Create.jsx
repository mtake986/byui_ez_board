import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ModalWrapper from "./ModalWrapper";

export default function Create() {
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesome5 name={"plus"} style={styles.flexItem} />
        </TouchableOpacity>
      </View>
      <ModalWrapper modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
});
