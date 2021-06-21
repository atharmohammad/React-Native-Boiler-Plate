import React from "react";
import { TextInput, Button, View , Text } from "react-native";

export default function Signup({ navigation }) {
  return (
    <>
      <Text>Signup</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </>
  );
}
