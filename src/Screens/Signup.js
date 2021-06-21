import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.wrap}>
      <Text h3 style={{ textAlign: "center" }}>
        Signup
      </Text>
      <Input
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
      />

      <Input
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        secureTextEntry
      />

      <Button title="Signup" />
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "blue" }}>
          Dont have a account ? Go to Sign up
        </Text>
      </TouchableOpacity>
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
  link: {
    marginTop: 10,
  },
});
