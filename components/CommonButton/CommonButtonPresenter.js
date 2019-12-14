import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

class CommonButton extends React.Component {
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
    backgroundColor: "#ed1c24",
    width: width / 1.1,
    alignItems: "center",
    paddingVertical: 18
  },
  btn_text: {
    fontSize: 24,
    color: "white",
    fontWeight: "600"
  }
});

export default CommonButton;
