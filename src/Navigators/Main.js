import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrackNavigation from "./TrackNavigation"
import Accounts from "../Screens/Accounts"
import TrackCreate from "../Screens/TrackCreate"

const Tab = createBottomTabNavigator();

export default function Main(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="TrackNavigation" component={TrackNavigation} />
      <Tab.Screen name="Accounts" component={Accounts} />
      <Tab.Screen name="TrackCreate" component={TrackCreate} />
    </Tab.Navigator>
  )
}
