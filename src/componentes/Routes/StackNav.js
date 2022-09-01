import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../Login'
import Home from '../Home'

const Stack = createStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
