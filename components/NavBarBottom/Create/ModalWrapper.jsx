import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FormInsideModal from "./FormInsideModal";
import CloseBtn from "./CloseBtn";


export default function ModalWrapper({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalText}>Choose Your Type.</Text>
          </View>
          <FormInsideModal />
          <CloseBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 150,
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
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalText: {
    fontSize: 24,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
