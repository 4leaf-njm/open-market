import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

const Logo = styled.Text`
  font-size: 22px;
  color: #4a69bd;
  margin-left: 10px;
`;

class Header extends React.Component {
  render() {
    const { isLogin } = this.props;

    return (
      <View style={styles.container}>
        <Logo>Mall</Logo>
        <View style={styles.search_area}>
          <TextInput style={styles.search_input} />
          <FontAwesome name="search" size={20} />
        </View>
        <FontAwesome name="shopping-cart" size={20} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },

  search_area: {},

  search_input: {}
});

export default Header;
