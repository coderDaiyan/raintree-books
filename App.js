import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Home } from "./screens";
import BookDetail from "./screens/BookDetail";


export default function App() {
  return (
    <View style={styles.container}>
      
<Home />
      
      {/* <BookDetail/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: "white",
    
  
  },
});
