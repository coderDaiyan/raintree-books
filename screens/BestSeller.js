import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
export const BestSeller = ({item,navigation}) => {
    return(
        <TouchableOpacity  onPress={() => navigation.navigate("BookDetail",{
            book:item
        })}>
        <View style={{ flex:1, flexDirection:"row",marginLeft:15,marginBottom:15,marginRight:0}}>
        <View style={{flex:3.5}} >
        <Image
      source={{ uri: item.cover }}
      resizeMode="cover"
      style={{ width: 100, height: 120, borderRadius: 5 }}
    ></Image>

        </View>
        <View  style={{flex:5,marginLeft:5}}>
        <Text style={{fontSize:18}}>{item.name}</Text>
        <Text style={{color:"gray"}}>by {item.author}</Text>
        <View style={{flexDirection:"row",marginTop:10}}><Text style={{color:"green",padding:5}}>Adventure</Text>
       <Text style={{color:"red",padding:5}} >Romance</Text>
       <Text style={{color:"blue",padding:5}}>Drama</Text>
       </View>
       


        </View>
        <View style={{flex:1.5,marginLeft:10}}>
        <FontAwesome5 name="bookmark" size={20} color="black" />

        </View>

        </View>
        </TouchableOpacity>

    )

}
