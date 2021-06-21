import React from "react";
import { TextInput, Button, View , Text } from "react-native";

export default function Login({ navigation }) {
  return (
    <>
      <Text>Login</Text>
      <Button
        title="Go to Signup"
        onPress={()=>navigation.navigate('Signup')}
      />
    </>
  );
}
