import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../Screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Pressable, Text, View } from "react-native";
import ProductScreen from "../../Screens/Products/ProductModule";
import SearchBar from "../../Screens/Search/Views/SearchBar";
import QRScreen from "../../Screens/QR/QRModule";

const BottomTab = createBottomTabNavigator();
const TAB_HOME = "tabHome";

export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme();
  const iconTabHome = (color = "#2f303a", focused) => {
    const icon = focused ? (
      <Ionicons name="home-sharp" size={36} color={color} />
    ) : (
      <Ionicons name="home-outline" size={32} color={color} />
    );
    return icon;
  };

  const iconQR = (color = "#2f303a", focused) => {
    return focused ? (
      <Ionicons name="qr-code-sharp" size={32} color={color} />
    ) : (
      <Ionicons name="qr-code-outline" size={28} color={color} />
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName={TAB_HOME}
      screenOptions={{
        tabBarActiveTintColor: "#2f303a",
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={TAB_HOME}
        component={ProductScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, focused }) => iconTabHome(color, focused),
          headerTitle: props => <SearchBar {...{ props, navigation }} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <AntDesign
                name="shoppingcart"
                size={32}
                color="#2f303a"
                style={{ marginRight: 20 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabOne"
        component={QRScreen}
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) => iconQR(color, focused),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Giỏ hàng",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="questioncircleo" size={24} color="black" />
          ),
          headerTitleStyle: {
            color: "#2f303a",
          },
        })}
      />
    </BottomTab.Navigator>
  );
}
