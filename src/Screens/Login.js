import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Text } from "react-native-elements";

export default function Login({ navigation }) {
  return (
    <View style={styles.wrap}>
      <Text h3 style={{ textAlign: "center" }}>
        Login
      </Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    justifyContent: "center",
    height: "80%",
    margin: 10,
  },
});
