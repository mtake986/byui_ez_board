import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function SubmitBtn({ handleSubmit, allFieldsTypedIn }) {
  return (
    <>
      {allFieldsTypedIn ? (
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() =>
            alert(
              "Please Type in all Fields!!\n If not seeing Price input, \n Scroll down inside the Form!!"
            )
          }
        >
          <Text
            style={[styles.submitBtnText, styles.disabled ]}
          >
            Fill in All Fields
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  submitBtn: {
    width: "100%",
  },
  submitBtnText: {
    fontSize: 20,
    backgroundColor: "rgb(236, 250, 220)",
    color: "rgb(78, 143, 3)",
    padding: 10,
    textAlign: "center",
  },
  disabled: {
    backgroundColor: "rgb(240, 240, 240)",
    color: "rgb(200, 200, 200)",
  },
});
