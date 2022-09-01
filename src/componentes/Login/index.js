import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Login() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.title}>Tela Inicial</Text>
      <Button
        style={estilo.button}
        title="Home"
        onPress={() => navigation.navigate('Home1')}
      />
    </SafeAreaView>
  )
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0f0',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    width: 20,
    height: 10,
    marginTop: 100
  }
})
