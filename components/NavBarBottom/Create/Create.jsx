import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ModalContainer } from "../../index";

export default function Create() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesome5 name={"plus"} style={styles.flexItem} />
      </TouchableOpacity>
      <ModalContainer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flexItem: {
    color: "rgb(0, 110, 182)",
    padding: 10,
    fontSize: "32px",
  },
});
