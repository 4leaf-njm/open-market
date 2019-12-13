// 홈 화면
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>홈</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
