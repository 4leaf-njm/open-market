// TabNavigation + Screens Stack
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import Login from "../screens/Login";
import Join from "../screens/Join";
import Search from "../screens/Search";
import ProdInfo from "../screens/ProdInfo";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login
    },
    Join: {
      screen: Join
    },
    Search: {
      screen: Search
    },
    ProdInfo: {
      screen: ProdInfo
    }
  },

  {
    headerMode: "screen",
    mode: "card"
  }
);

export default createAppContainer(MainNavigation);
