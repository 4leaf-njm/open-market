import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
class Banner extends React.Component {
  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/banner_1.jpg")}
          style={styles.image}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: width
  }
});

export default Banner;
