import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import Allbooks from "../assets/fakeData/books.json";
import { bestSeller } from "./BestSeller";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image
      source={{ uri: item.cover }}
      resizeMode="cover"
      style={{ width: 170, height: 210, borderRadius: 5 }}
    ></Image>
  </View>
);

export default function Home () {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
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
    paddingTop: 40,
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
