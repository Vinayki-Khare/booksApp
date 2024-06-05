// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BooksScreen from '../screens/BooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import SearchScreen from '../screens/SearchScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);


<Drawer.Screen name="Auth" component={AuthStack} />


const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Books"
      component={BooksScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="BookDetail"
      component={BookDetailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Books"
        component={BooksScreen}
      // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
      //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
      // options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
  };

export default AppNavigator;
{/*
     <NavigationContainer>
     <Stack.Navigator>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        //options={{ headerShown: false }}
      />
    </Drawer.Navigator> 
    </Stack.Navigator>
  </NavigationContainer>
*/}
