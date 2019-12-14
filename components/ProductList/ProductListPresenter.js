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
import ProductOne from "../ProductOne";
import ImageList2 from "../ImgList";

const { width } = Dimensions.get("window");

class ProductList extends React.Component {
  render() {
    const { productList } = this.props;

    const images = new Array();
    productList.map(p => {
      obj = {
        source: require(p.image),
        name: p.name,
        price: p.price,
        grade: p.grade
      };
      images.push(obj);
    });

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
