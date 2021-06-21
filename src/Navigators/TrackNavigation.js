import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import TrackList from "../Screens/TrackList"
import TrackDetail from "../Screens/TrackDetail"

const Stack = createStackNavigator();

export default function Main(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackList} />
      <Stack.Screen name="TrackDetail" component={TrackDetail} />
    </Stack.Navigator>
  )
}
