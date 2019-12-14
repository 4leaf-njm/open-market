import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { publicColors } from "../../assets/colors/colors";
import styled from "styled-components";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

class ProductOne extends React.Component {
  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.image_view}>
          <Image
            style={styles.image}
            source={require("../../assets/images/hi.png")}
          />
        </View>
        <View>
          <Text style={styles.price}>
            1,500
            <Text style={styles.unit}>원~</Text>
          </Text>
        </View>
        <View style={styles.price_Box}>
          <Text style={styles.name}>
            [플라워트리]하이프리미엄 크리스마스 무장식 트리~3M 장식 소품
          </Text>
          <View style={styles.star_Box}>
            <FontAwesome style={styles.star} name="star" size={20} />
            <FontAwesome style={styles.star} name="star" size={20} />
            <FontAwesome style={styles.star} name="star" size={20} />
            <FontAwesome style={styles.star} name="star" size={20} />
            <FontAwesome style={styles.star} name="star" size={20} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image_view: {
    width: width / 2.4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 150,
    borderColor: "#dddddd",
    borderWidth: 1,
    width: width / 2.4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  price: {
    paddingVertical: 10,
    fontSize: 24,
    fontWeight: "600"
  },
  unit: {
    fontSize: 14,
    fontWeight: "300"
  },
  name: {
    fontWeight: "400"
  },
  price_Box: {
    width: width / 2.4,
    height: 38,
    borderColor: "black",
    borderWidth: 1
  },
  star: {
    color: "#dddddd",
    padding: 2
  },
  star_Box: {
    width: width / 2.4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -100,
    paddingVertical: 10
  }
});

export default ProductOne;
