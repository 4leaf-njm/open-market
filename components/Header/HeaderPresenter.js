import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import styled from "styled-components";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { publicColors } from "../../assets/colors/colors";

const Logo = styled.Image`
  margin-left: 10px;
`;

class Header extends React.Component {
  render() {
    const { isLogin, loginCheck, navigation } = this.props;
    console.log(isLogin);

    return (
      <View style={styles.container}>
        <View style={styles.left_area}>
          <Logo source={require("../../assets/images/logo.png")} />
        </View>

        <View style={styles.search_area}>
          <TextInput style={styles.search_input} />
          <TouchableOpacity style={styles.search_icon}>
            <FontAwesome name="search" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.right_area}>
          <TouchableOpacity
            onPress={() =>
              isLogin
                ? alert("Hi")
                : navigation.navigate({ routeName: "Login" })
            }
          >
            <AntDesign
              name="shoppingcart"
              size={45}
              style={styles.right_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const handleCartPress = () => {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 60,
    borderBottomColor: publicColors.GRAY_COLOR,
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1.0
  },

  left_area: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginLeft: 10,
    marginRight: 5
  },

  search_area: {
    flex: 4,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 20,
    paddingBottom: 10,
    height: 60,
    borderBottomColor: publicColors.RED_COLOR,
    borderBottomWidth: 3
  },

  search_input: {
    flex: 0.8,
    height: 30,
    paddingLeft: 10,
    paddingRight: 15,
    fontSize: 16,
    color: publicColors.BLACK_COLOR
  },

  search_icon: {
    flex: 0.2,
    alignSelf: "flex-end",
    paddingRight: 5,
    color: publicColors.GRAY_COLOR_02
  },

  right_area: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginRight: 10
  },

  right_icon: {
    color: publicColors.GRAY_COLOR_02
  }
});

export default Header;
