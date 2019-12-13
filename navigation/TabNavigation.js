// 하단 탭 Navigation
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";

const TabNavigation = createBottomTabNavigator(
  {
    FirstScreen: {
      screen: Home,
      navigationOptions: { title: "홈" }
    },
    SecondScreen: {
      screen: Cart,
      navigationOptions: { title: "장바구니" }
    }
  },

  {
    tabBarOptions: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e0e0e0",
        marginBottom: 10
      }
    }
  }
);

export default createAppContainer(TabNavigation);
