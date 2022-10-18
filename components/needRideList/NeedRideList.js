import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import uuidv4 from "uuid/v4";
import React, { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "../AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Eggs" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Chicken" },
  ]);

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    if (text === "") {
      console.log("Please enter an item");
      alert('Error', "Please enter an item", {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
  },
});
