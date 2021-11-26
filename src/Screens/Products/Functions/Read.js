import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import CreateProduct from "./Create";
import { dataMock } from "./Mock";
import { v3 } from "lodash";
export default function ReadProductScreen({ navigation }) {
  return (
    <SafeAreaView>
      <VirtualizedList

        data={dataMock}
        initialNumToRender={4}
        renderItem={({ item }) => (
          <Item
            key={v3}
            title={item.title}
            nav={navigation}
            queryId={item.detailQuery}
          />
        )}
        keyExtractor={v3}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}
const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
  detailQuery: `${index + 1}`,
});

const getItemCount = data => 200;

const Item = ({ title, nav, queryId }) => (
  <Pressable
    onPress={() =>
      nav.navigate("Create", {
        // phd
        itemId: queryId,
        otherParam: "anything you want here",
      })
    }>
    <View style={styles.item}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <View>
        <Text style={styles.title}>Ten san pham:{title}</Text>
        <Text style={styles.itemContent}>aaa</Text>
      </View>
    </View>
  </Pressable>
);
// styles doi ten thanh cai khac duoc ne
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    // dau gach ngang
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
});
