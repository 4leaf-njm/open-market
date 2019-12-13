import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components";

const FooterBold = styled.Text`
  font-size: 22px;
  color: #4a69bd;
  margin-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FooterNormal = styled.Text`
  font-size: 18px;
  color: #4a69bd;
  margin-left: 10px;
`;

const { width } = Dimensions.get("window");

class Footer extends React.Component {
  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <FooterBold>몰몰(주)</FooterBold>
        <FooterBold>1234-5678</FooterBold>
        <FooterNormal>mallmall@mallmall.com</FooterNormal>
        <FooterNormal>
          Copyright@ Mall Mall Co.,LTD.All rights reserved
        </FooterNormal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f8f8f8",
    width: width,
    paddingVertical: 20,
    paddingHorizontal: 10
  }
});

export default Footer;
