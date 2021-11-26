import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Pressable, Text, View } from "react-native";

export default function SearchBar(props) {
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
            onPress={() => props.navigation.navigate("SearchScreen")} // chuyen sang screen co search kkk
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
