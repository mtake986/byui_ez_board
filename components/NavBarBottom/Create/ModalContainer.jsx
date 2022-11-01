import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import FormInsideModal from "./FormInsideModal";
import { CochinText, CloseBtn } from "../../index";

export default function ModalContainer({ modalVisible, setModalVisible }) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CloseBtn
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <View style={styles.modalHeader}>
            <CochinText style={styles.modalHeaderText} text="Board Form" />
          </View>
          <FormInsideModal />
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
  },
  modalView: {
    // These width and height values are screen size values
    width: "100%",
    height: "100%",
    marginTop: 112, // 112 is the sum of the height of Footer and Header
    position: "absolute",
    backgroundColor: "white",
    padding: 30,
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
  modalHeaderText: {
    fontSize: 40,
  },
  btnsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    marginTop: 20,
  },
});
