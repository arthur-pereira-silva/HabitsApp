import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { router } from 'expo-router'
import { Input, InputField, Text, Button, ButtonText, Divider } from '@gluestack-ui/themed'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'
import { IUserLogin } from '../interfaces/login'
import { useAuth } from '../hooks/auth'

export default function Login() {

  const auth = useAuth() //componente global

  return (
    <View style={styles.container}>


      <View style={styles.form}>
        <Text size='xl' style={styles.title} >Tela de login</Text>

        <Input variant='outline' size='md' mb={12} mr={8} ml={8}>
          <InputField 
            placeholder='Digite o seu e-mail' 
            style={styles.text}
            onChangeText={(texto) => auth.setUser({...auth.user, email: texto})} //tecnica de spread do JavaScript "...user"
          />
        </Input>

        <Input variant='outline' size='md' mb={12} mr={8} ml={8}>
          <InputField 
            type='password' 
            placeholder='Digite a sua senha' 
            style={styles.text}
            onChangeText={(senha) => auth.setUser({...auth.user, password: senha})}
          />
        </Input>

        <Button onPress={auth.handleLogin} size='lg' variant='solid' action='primary' bgColor='#22c36a'>
          <ButtonText>Fazer Login  <Entypo name="login" size={24} color="white" /></ButtonText>
        </Button>
      </View>


      <View style={styles.form2}>
        <Image source={require('./../assets/todolist.jpeg')} 
               style={{height: 500, width: 500}}></Image>
      </View>


      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040710',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  form:{
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: 36,
    marginRight: 36
  },
  form2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 36,
    marginRight: 36,
    width: 40, 
    height: 40
  },
  tinyLogo:{
    width: 100,
    height: 100
  }, 
  title:{
    margin: 36,
    marginBottom: 40,
    color: 'white',
    fontSize: 28 
  },
  text:{
    color: 'white'
  }
});
