import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../Screens/LoginScreen";
import SignupScreen from "../../Screens/SignupScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ presentation: "transparentModal", headerShown: false }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} options={
        { title: 'Back' }
      }/>
    </Stack.Navigator>
  );
}
