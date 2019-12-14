import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  FlatList,
  SafeAreaView,
  Text
} from "react-native";
import ImageList2 from "../ImgList";

const { width } = Dimensions.get("window");

class ProductList extends React.Component {
  state = {};

  render() {
    const images = [
      {
        source: require("../../assets/images/banner_1.jpg"),
        id: 1
      },
      {
        source: require("../../assets/images/banner_2.jpg"),
        id: 2
      },
      {
        source: require("../../assets/images/banner_3.jpg"),
        id: 3
      },
      {
        source: require("../../assets/images/banner_4.jpg"),
        id: 4
      },
      {
        source: require("../../assets/images/banner_5.jpg"),
        id: 5
      }
    ];

    return images.map(img => <ImageList2 data={img.source} />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  image: {
    resizeMode: "contain",
    width: width,
    height: width / 2,
    backgroundColor: "grey"
  }
});

export default ProductList;
