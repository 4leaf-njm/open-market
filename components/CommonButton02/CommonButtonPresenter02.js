import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

const { width } = Dimensions.get("window");

const CommonButton02 = ({ text, nav, join }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={
        join
          ? () => nav.navigate({ routeName: "Join" })
          : () => alert("아직 개발 안했슈...")
      }
    >
      <Text style={styles.btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
    width: width / 1.4,
    alignItems: "center",
    paddingVertical: 16
  },
  btn_text: {
    fontSize: 24,
    color: "red",
    fontWeight: "400"
  }
});

export default CommonButton02;
