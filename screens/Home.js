import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
 
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Allbooks from "../assets/fakeData/books.json";
import {BestSeller} from "./BestSeller"

export default function Home ({ navigation}) {

const bestSeller = ({item}) => {
  return(
      <BestSeller item={item} navigation={navigation}/>)
}
  const Item = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() =>  navigation.navigate("BookDetail",{
      book:item
    })}>
      <Image
        source={{ uri: item.cover }}
        resizeMode="cover"
        style={{ width: 170, height: 210, borderRadius: 5 }}
      ></Image>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.container}>
    <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:11,backgroundColor:"#46597a",paddingVertical:12,marginBottom:5}}>
      <Text style={{color:"white",fontSize:20}}>Good morning</Text>
      <Text style={{color:"white",fontSize:20}}>Sakib Ahmed</Text>
    </View>
      <View style={{ flex: 3.5 }}>
        <Text style={{ fontSize: 30, marginLeft: 15 }}>My book</Text>
        <FlatList
          data={Allbooks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{ fontSize: 30, marginLeft: 15, marginVertical: 5 }}>
          Best seller
        </Text>
        <FlatList
          data={Allbooks}
          renderItem={bestSeller}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#46597a",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});
