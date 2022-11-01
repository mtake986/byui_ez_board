import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SubmitBtn } from "../../index";

export default function BoardForm({ boardType }) {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [leavingDateTime, setLeavingDateTime] = useState(new Date());
  const [cityFrom, setCityFrom] = useState();
  const [cityTo, setCityTo] = useState();
  const [numOfSuitcases, setNumOfSuitcases] = useState();
  const [maxSeats, setMaxSeats] = useState();
  const [price, setPrice] = useState();

  const [allFieldsTypedIn, setAllFieldsTypedIn] = useState(false);

  const handleLeavingDateTimeChange = (event, selectedDateTime) => {
    setLeavingDateTime(selectedDateTime);
    console.log(
      `selectedDateTime: ${selectedDateTime}, leavingDateTime: ${leavingDateTime}`
    );
  };
  const handleSubmit = () => {
    console.log("========= handleSubmit =========");
    alert(
      `fname: ${fname}, 
      lname: ${lname}, 
      leavingDateTime: ${leavingDateTime},
      cityFrom: ${cityFrom}, 
      cityTo: ${cityTo}, 
      numOfSuitcases: ${numOfSuitcases}, 
      maxSeats: ${maxSeats}, 
      price: ${price}, `
    );
  };

  useEffect(() => {
    if (fname &&
        lname &&
        leavingDateTime &&
        cityFrom &&
        cityTo &&
        price &&
        (numOfSuitcases || maxSeats)) {
      setAllFieldsTypedIn(true);
    } else {
      setAllFieldsTypedIn(false);
    }
  }, [
    fname,
    lname,
    leavingDateTime,
    cityFrom,
    cityTo,
    price,
    numOfSuitcases,
    maxSeats,
  ]);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroller}>
          {/* First Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.) Masahiro"
              onChangeText={(newText) => setFname(newText)}
              defaultValue={fname}
            />
          </View>
          {/* Last Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.) Takechi"
              onChangeText={(newText) => setLname(newText)}
              defaultValue={lname}
            />
          </View>
          {/* Leaving Date & Time */}
          <View style={styles.dateTimeLabelInputContainer}>
            <Text style={[styles.label, styles.dateTimeLabel]}>
              Leaving Date & Time
            </Text>
            <DateTimePicker
              mode="datetime"
              minimumDate={new Date()}
              onChange={handleLeavingDateTimeChange}
              value={leavingDateTime ? leavingDateTime : null}
            />
          </View>
          {/* City From */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>City From</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.) Rexburg"
              onChangeText={(newText) => setCityFrom(newText)}
              defaultValue={cityFrom}
            />
          </View>

          {/* City To */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>City To</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.) Salt Lake City"
              onChangeText={(newText) => setCityTo(newText)}
              defaultValue={cityTo}
            />
          </View>

          {/* Max Seats / Number of Suitcases */}
          {boardType === "Give" ? (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Max Seats</Text>
              <View style={styles.row}>
                <Text style={styles.mark}>#</Text>
                <TextInput
                  style={[styles.input, styles.inputNumPad]}
                  placeholder="Ex.) 4"
                  onChangeText={(newText) => setMaxSeats(newText)}
                  keyboardType="numeric"
                  maxLength={1}
                  defaultValue={maxSeats}
                />
              </View>
            </View>
          ) : boardType === "Need" ? (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Num of Suitcases</Text>
              <View style={styles.row}>
                <Text style={styles.mark}>#</Text>
                <TextInput
                  style={[styles.input, styles.inputNumPad]}
                  placeholder="Ex.) 2"
                  onChangeText={(newText) => setNumOfSuitcases(newText)}
                  keyboardType="numeric"
                  maxLength={1}
                  defaultValue={numOfSuitcases}
                />
              </View>
            </View>
          ) : null}

          {/* Price */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Price</Text>
            <View style={styles.row}>
              <Text style={styles.mark}>$</Text>
              <TextInput
                style={[styles.input, styles.inputNumPad]}
                placeholder="Ex.) 25"
                onChangeText={(newText) => setPrice(newText)}
                keyboardType="numeric"
                maxLength={2}
                defaultValue={price}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.btnsContainer}>
        <SubmitBtn handleSubmit={handleSubmit} allFieldsTypedIn={allFieldsTypedIn} />
        {/* <ResetBtn handleReset={handleReset} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 18,
    color: "rgb(100, 100, 100)",
    fontFamily: "Avenir",
  },
  dateTimeLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    width: 150,
    padding: 5,
    borderBottomColor: "rgba(148, 148, 148, .3)",
    borderBottomWidth: 1,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  inputNumPad: {
    width: 75,
  },
  dateTimeLabelInputContainer: {
    marginVertical: 10,
    flexDirection: "column",
  },
  dateTimeLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  container: {
    height: "100%",
    maxHeight: "70%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroller: {
    width: "90%",
    paddingRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  mark: {
    fontSize: 16,
    marginBottom: 3,
  },
  btnsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 50,
    marginTop: 20,
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
    fontFamily: "Avenir",
  },
});
