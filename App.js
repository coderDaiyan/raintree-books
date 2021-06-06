import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Home,BookDetail } from "./screens";


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
    <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="BookDetail" component={BookDetail}/>
    </Stack.Navigator>
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: "white",
    
  
  },
});
