// 홈 화면
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

export default Home;
