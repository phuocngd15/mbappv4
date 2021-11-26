import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function SearchScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View>
      <Text>Search Screen</Text>
    </View>
  );
}
