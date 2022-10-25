import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function BoardForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name: {fname} </Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Ex.) Masahiro"
            onChangeText={(newText) => setFname(newText)}
            defaultValue={fname}
          />
        </View>
        <View>
          <Text style={styles.label}>Last Name: {lname} </Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Ex.) Takechi"
            onChangeText={(newText) => setLname(newText)}
            defaultValue={lname}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
  },
  inputContainer: {
    width: "50%",
  },
  row: {
    flexDirection: "row",
  },
});
