import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  View
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../../assets/images/banner_1.jpg"),
  require("../../assets/images/banner_2.jpg"),
  require("../../assets/images/banner_3.jpg"),
  require("../../assets/images/banner_4.jpg"),
  require("../../assets/images/banner_5.jpg")
];
var i = 0;

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uri: images[i] };
    setInterval(() => {
      this.changeLogo();
    }, 3000);
  }

  changeLogo() {
    this.setState({
      uri: images[i++]
    });
    if (i > 4) i = 0;
  }

  render() {
    // const {} = this.props;

    return (
      <View style={styles.container}>
        <Image source={this.state.uri} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: width,
    height: width / 2
  }
});

export default Banner;
