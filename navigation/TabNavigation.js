// 하단 탭 Navigation
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Login from "../screens/Login";
import { FontAwesome } from "@expo/vector-icons";
import { publicColors } from "../assets/colors/colors";

const TabNavigation = createBottomTabNavigator(
  {
    FirstScreen: {
      screen: Home,
      navigationOptions: {
        title: "홈"
      }
    },
    SecondScreen: {
      screen: Cart,
      navigationOptions: {
        title: "장바구니"
      }
    }
  },

  {
    tabBarOptions: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: publicColors.WHITE_COLOR,
        opacity: 0.85
      },
      labelPosition: "below-icon"
    }
  }
);

export default createAppContainer(TabNavigation);
