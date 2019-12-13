// 하단 탭 Navigation
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabNavigation = createBottomTabNavigator(
  {},

  {
    tabBarOptions: {
      style: {}
    }
  }
);

export default createAppContainer(TabNavigation);
