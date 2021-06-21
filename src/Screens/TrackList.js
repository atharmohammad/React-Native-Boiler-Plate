import React from "react";
import { TextInput, Button, View , Text } from "react-native";

export default function TrackList({ navigation }) {
  return (
    <>
      <Button
        title="TrackDetails"
        onPress={()=>navigation.navigate('TrackDetail')}
      />
    </>
  );
}
