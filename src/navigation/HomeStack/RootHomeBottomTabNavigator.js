import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../screen/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Pressable, Text, View } from "react-native";
import ProductScreen from "../../screen/products/ProductScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarActiveTintColor: "#2f303a",
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "#fff",
        },
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={{
          title: "Scan",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="qr-code-sharp" size={32} color="#2f303a" />
            ) : (
              <Ionicons name="qr-code-outline" size={28} color="#2f303a" />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="TabHome"
        component={ProductScreen}
        options={({ navigation }) => ({
          //title:"Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="home-sharp" size={36} color="#2f303a" />
            ) : (
              <Ionicons name="home-outline" size={32} color="#2f303a" />
            );
          },

          headerTitle: props => <LogoTitle {...{ props, navigation }} />,
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
        name="TabThree"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Giỏ hàng",
          tabBarIcon: ({ color, focused }) => {
           return <AntDesign name="questioncircleo" size={24} color="black" />
          },
          headerTitleStyle: {
            color: "#2f303a",
          },
          
        })}
      />
    </BottomTab.Navigator>
  );
}

function LogoTitle(props) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFocus, setIsFocus] = React.useState(false);
  const onChangeSearch = query => {
    setSearchQuery(query);
  };
  const onKeyPressHandle = even => {
    const {
      nativeEvent: { key },
    } = even;
    console.log("key", even);
    if (key === "Enter") {
      setIsFocus(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        paddingHorizontal: 10,
        margin: 0,
        borderColor: isFocus ? "" : "grey",
        borderWidth: 1,
        borderRadius: 12,
      }}>
      {isFocus && (
        <TextInput
          style={styles.input}
          onChangeText={onChangeSearch}
          value={searchQuery}
          onBlur={props => {}}
          inlineImageLeft="search_icon"
          onEndEditing={() => setIsFocus(false)}
          autoFocus={true}
        />
      )}

      {!isFocus && (
        <>
          <Ionicons
            name="search"
            onPress={() => setIsFocus(true)}
            size={24}
            color="black"
            style={{
              paddingTop: 15,
              color: "#2f303a",
              marginRight: 5,
              opacity: 0.6,
            }}
          />
          <Text
            onPress={() => props.navigation.navigate("TabTwo")} // chuyen sang screen co search kkk
            numberOfLines={1}
            style={{
              paddingTop: searchQuery ? 15 : 5,
              marginLeft: 5,
              width: "85%",
              fontSize: searchQuery ? 14 : 25,
              opacity: 0.5,
            }}>
            {searchQuery ? searchQuery : "..."}
          </Text>
        </>
      )}
      <Feather
        name="camera"
        size={27}
        color="black"
        style={{ paddingTop: 15, color: "#2f303a", opacity: 0.6 }}
      />
    </View>
  );
}
