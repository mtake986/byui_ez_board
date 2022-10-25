// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// const AddItem = ({addItem}) => {
//   const [text, setText] = useState("");
//   const onChange = (textValue) => setText(textValue);

//   return (
//     <View>
//       <TextInput
//         placeholder="Add Item..."
//         style={styles.input}
//         onChangeText={onChange}
//       />
//       <TouchableOpacity style={styles.btn}>
//         <Text style={styles.btnText} onPress={() => addItem(text)}>Add Item</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 60,
//     padding: 8,
//     fontSize: 16,
//   },
//   btn: {
//     padding: 9,
//     margin: 5,
//     backgroundColor: "#c2bad8",
//   },
//   btnText: {
//     color: "darkslateblue",
//     fontSize: 20,
//     textAlign: "center",
//   },
// });

// export default AddItem;
