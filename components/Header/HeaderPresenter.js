import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends React.Component {
  render() {
    const {} = this.props;

    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Header;
