import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RootHomeBottomTabNavigator from "./RootHomeBottomTabNavigator";
import HomeScreen from "../../screen/HomeScreen";
import CreateProduct from "../../screen/products/CRUD/Create";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      {/*   <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerMode: false,
        }}
      /> */}
      <Stack.Screen
        name="RootHome"
        component={RootHomeBottomTabNavigator}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      /> */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
      </Stack.Group>
        <Stack.Screen name="Create" component={CreateProduct} />
    </Stack.Navigator>
  );
}
