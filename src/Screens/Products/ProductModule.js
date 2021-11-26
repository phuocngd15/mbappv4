import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import CreateProduct from "./Functions/Create";
import ReadProductScreen from "./Functions/Read";

export default function ProductScreen({ navigation }) {
  return (
    <View>
      <StatusBar style="dark-content" />
      <ReadProductScreen navigation={navigation} />
    </View>
  );
}


// danh manh vao viec quan li san pham syc cac cua hang khac nhau lai voi nhau
// update, create, sync... lien tuc

// co che publish notification refesh
// auto refesh => auto request => tin hieu request ??

// function đơn giản là xem chi tiết sản phẩm, thêm sản phẩm, xóa sản phẩm??
// đơn hàng?
// đơn hàng thì có khách hàng?
// có cần quản lý khách hàng k??
