// 로그인 화면
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import Header from "../components/Header/HeaderPresenter";
import CommonButton from "../components/CommonButton";
import CommonButton02 from "../components/CommonButton02";
import CommonInput from "../components/CommonInput/CommonInputPresenter";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.login_input}>
        <CommonInput placeholder="아이디" />
      </View>
      <View style={styles.login_input}>
        <CommonInput placeholder="비밀번호" secureText={true} />
      </View>
      <View View style={styles.login_btn}>
        <CommonButton text="로그인" />
      </View>
      <View View style={styles.sign}>
        <CommonButton02 text="회원가입" nav={navigation} join={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  login_input: {
    paddingBottom: 20
  },
  login_btn: {
    paddingVertical: 10
  },
  sign: {
    top: 100
  }
});

export default Login;
