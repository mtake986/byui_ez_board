import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/dist/FontAwesome";

export default function App({ item, deleteItem }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.text}</Text>
      <Text
        style={styles.listItemIcon}
        name="remove"
        onPress={() => deleteItem(item.id)}
      >
        X
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 16,
    color: "#666",
  },
  listItemIcon: {
    fontSize: 16,
    color: "violet",
  },
});
