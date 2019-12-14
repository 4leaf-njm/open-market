// 회원가입 화면
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import CommonButton from "../components/CommonButton";
import CommonInput from "../components/CommonInput/CommonInputPresenter";

const Join = () => {
  return (
    <View style={styles.container}>
      <View style={styles.login_input}>
        <CommonInput placeholder="이름 생성" />
      </View>
      <View style={styles.login_input}>
        <CommonInput placeholder="아이디 생성" />
      </View>
      <View style={styles.login_input}>
        <CommonInput placeholder="비밀번호 생성" secureText={true} />
      </View>
      <View style={styles.sign}>
        <CommonButton text="회원가입" />
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

export default Join;
