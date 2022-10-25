import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function BoardForm() {

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 30,
  },
});
