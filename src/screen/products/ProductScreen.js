import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import CreateProduct from "./CRUD/Create";
import ReadProductScreen from "./CRUD/Read";

export default function ProductScreen({ navigation }) {
  return (
    <View>
      <StatusBar style="dark-content" />
      <ReadProductScreen navigation={navigation} />
    </View>
  );
}
