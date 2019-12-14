// 홈 화면
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>

      <View style={styles.content}>
        <ScrollView>
          <Banner />
          <ProductList />
          <Footer />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1
  },

  content: {
    flex: 4
  },

  footer: {
    flex: 1
  }
});

export default Home;
