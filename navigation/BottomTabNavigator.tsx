import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AlbumsScreen from "../screens/AlbumsScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import WelcomScreen from "../screens/WelcomScreen";
import { BottomTabParamList, HomeParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<any>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={WelcomScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="search" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={WelcomScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="music-box-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Spotify"
        component={WelcomScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="spotify" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<any>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="WelcomeScreen"
        component={WelcomScreen}
        options={{ headerTitle: "Home" }}
      />
      <TabOneStack.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{ headerTitle: "Albums" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
