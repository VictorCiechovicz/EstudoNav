import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabNav from './TabNav'
import StackNav from './StackNav'

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNav />
      <TabNav />
    </NavigationContainer>
  )
}
