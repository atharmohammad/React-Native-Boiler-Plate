import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from "./Authentication"
import Main from "./Main"
const Stack = createStackNavigator();

export default function MainNavigator(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Authentication" component={Authentication}/>
      </Stack.Navigator>
  )
}
