import React from "react";
import { StyleSheet, Dimensions, TextInput } from "react-native";
import { publicColors } from "../../assets/colors/colors";

const { width } = Dimensions.get("window");

class CommonInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureText}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: width / 1.1,
    height: 40,
    borderColor: "white",
    borderBottomColor: "#dddddd",
    borderWidth: 1,
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 8,
    fontSize: 22,
    color: "#666666"
  }
});

export default CommonInput;
