import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductOne from "../ProductOne/ProductOnePresenter";

class ProductList extends React.Component {
  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <ProductOne />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductList;
