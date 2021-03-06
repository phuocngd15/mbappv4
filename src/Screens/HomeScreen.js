import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { IconButton } from "../Components";
import Firebase from "../../config/firebase";
import { AuthenticatedUserContext } from "../Navigation/AuthStack/AuthenticatedUserProvider";
import { useSelector } from "react-redux";
  
const auth = Firebase.auth();

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  // const user = useSelector(state => state.user)
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user?.email}!</Text>
        <IconButton
          name="logout"
          size={24}
          color="#111"
          onPress={handleSignOut}
        />
      </View>
      <Text style={styles.text}>Your UID is: {user?.uid} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#111",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#111",
  },
});
