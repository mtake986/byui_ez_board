import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BoardForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [selectedDate, setSelectedDate] = useState();
  const dateChange = (selectedDate) => {
    const currentDate = selectedDate;
    setSelectedDate(currentDate);
    setShowModal(false);
    console.log(currentDate);
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          style={{
            // borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            // shadowRadius: 2,
            elevation: 2,
            margin: 40,
            marginTop: 100,
          }}
          onDayPress={(date) => {
            dateChange(date);
          }}
          initialDate={selectedDate}
          minDate={new Date()}
          maxDate={"2022-12-31"}
          // disableArrowLeft={true}
          hideExtraDays={true}
        />
      </Modal>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Ex.) Masahiro"
            onChangeText={(newText) => setFname(newText)}
            defaultValue={fname}
          />
        </View>
        <View>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Ex.) Takechi"
            onChangeText={(newText) => setLname(newText)}
            defaultValue={lname}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date</Text>
          {selectedDate ? (
            <View style={styles.dateAndIcon}>
              <Text style={styles.dateText}>
                {selectedDate.month} / {selectedDate.day}
              </Text>
              <FontAwesome5
                onPress={() => setShowModal(true)}
                name={"calendar"}
                style={styles.flexItem}
              />
            </View>
          ) : (
            <FontAwesome5
              onPress={() => setShowModal(true)}
              name={"calendar"}
              style={styles.flexItem}
            />
          )}
        </View>
        <View>
          <Text style={styles.label}>Time</Text>
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
  dateAndIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    marginRight: 10,
  },
});
