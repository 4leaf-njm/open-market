import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

class CommonButton02 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

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
