import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../Dashboard'
import Home from '../Home'

const Tab = createBottomTabNavigator()

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  )
}
