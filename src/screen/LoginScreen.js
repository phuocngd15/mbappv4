import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button as RNButton } from "react-native";

import { Button, InputField, ErrorMessage } from "../components";
import Firebase from "../../config/firebase";
import LottieView from "lottie-react-native";

const auth = Firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");
  /*   const animation = useRef(null);
   */ const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };
  /*   const onPress = () => {
    animation.current.play();
  }; */
  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <LottieView
         
          style={{
            marginLeft: 80,
            marginBottom: 10,
          }}
          source={require("../../assets/box.json")}
          autoPlay
        />
        <Text style={styles.title}>
          Login
        </Text>
      </View>
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
          borderWidth: 1,
        }}
        leftIcon="email"
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          borderWidth: 1,
          marginBottom: 20,
        }}
        leftIcon="lock"
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
      <Button
        onPress={onLogin}
        backgroundColor="#f57c00"
        title="Login"
        tileColor="#fff"
        titleSize={20}
        containerStyle={{
          marginBottom: 24,
        }}
      />
      <RNButton
        onPress={() => navigation.navigate("Signup")}
        title="Go to Signup"
        color="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "55%",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    color: "#000",
    alignSelf: "center",
    paddingBottom: 24,
  },
});
