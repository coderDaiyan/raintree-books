import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { FontAwesome5,Feather } from '@expo/vector-icons';
import Allbooks from "../assets/fakeData/books.json";

const BookDetail = ({route,navigation}) => {
  const {book:myBook} = route.params;
   const [book, setBook] = useState(myBook);

  // useEffect(() => {

  //   let {book} = route.params;
  //   setBook[book]
  // }, []);

    const LineDivider = () => {
        return (
            <View style={{width:1,paddingVertical:5}}>
                <View style={{flex:1, borderLeftColor:"white",borderLeftWidth:1}}></View>
            </View>
        )
    }
  const renderBookInfoSection = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: "https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg" }}
          resizeMode="cover"
          style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0 }}
        />
        <View  style={{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"#c7c3b9",opacity:0.7}}>

        </View>

        {/* Navigation header */}
        <View
          style={{ flexDirection: "row", height: 80, alignItems: "flex-end" }}
        >
          <TouchableOpacity style={{ marginLeft: 10 }}>
         
            <Feather name="arrow-left" size={24} color="black" onPress={()=> navigation.goBack()} />

          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 25, color: "black" }}>Book Detail</Text>
          </View>
          <TouchableOpacity style={{marginRight:10}} >
      
          <Feather name="more-vertical" size={24} color="black" />

          {/* </Image> */}

          </TouchableOpacity>

        </View>
        {/* Book cover */}
        <View style={{flex:5,paddingTop:10,alignItems:"center"}}>
        <Image source={{uri: book?.cover}} resizeMode="contain" style={{ width:220,height:"auto", flex:1}}/>

        </View>
        {/* Name and author */}
        <View style={{flex:1.8,alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:18,fontWeight:"bold"}}>{book?.name}</Text>
        <Text style={{fontSize:18,fontWeight:"400"}}>{book?.author}</Text> 

        </View>
        <View style={{flexDirection:"row",paddingVertical:20,borderRadius:5,backgroundColor:"#292827", opacity:0.8, margin:20}}>
        {/* Rating */}
            <View style={{flex:1,alignItems:"center"}}>
                <Text style={{color:"white",fontSize:14}}>{book?.rating}</Text>
                <Text style={{color:"white",fontSize:14}}>Rating</Text>
            </View>
            <LineDivider/>
            {/* Pages */}
            <View style={{flex:1,alignItems:"center"}}>
                <Text style={{color:"white",fontSize:14}}>{book?.pages}</Text>
                <Text style={{color:"white",fontSize:14}}>Pages</Text>
            </View>
            {/* Language */}
            <LineDivider/>
            <View style={{flex:1,alignItems:"center"}}>
                <Text style={{color:"white",fontSize:14}}>Language</Text>
                <Text style={{color:"white",fontSize:14}}>English</Text>
            </View>
        </View>
      </View>
    );
  };
 
 const renderBookDescriptioin =   () => {
   return  (
     <View style={{flex:1,  flexDirection:"row",padding:10}}>
{/* Custom scrollbar */}
<View style={{width:4,height:"100%",backgroundColor:"lightgray"}}></View>
     <ScrollView contentContainerStyle={{padding:10}} showsVerticalScrollIndicator={false} >

     

     <Text style={{color:"white",marginBottom:5,fontSize:20}}>Description</Text>
     <Text style={{color:"lightgray",marginBottom:5}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi optio, beatae esse possimus tempore nemo veniam provident nesciunt aliquam neque laboriosam architecto, minus, quaerat reiciendis dolores! Suscipit pariatur ipsum reprehenderit!provident nesciunt aliquam neque laboriosam architecto, minus, quaerat reiciendis dolores! Suscipit pariatur ipsum reprehenderitprovident nesciunt aliquam neque laboriosam architecto, minus, quaerat reiciendis dolores! Suscipit pariatur ipsum reprehenderitLorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi optio, beatae esse possimus tempore nemo veniam provident nesciunt aliquam neque laboriosam architecto, minus, quaerat reiciendis dolores! Suscipit pariatur ipsum reprehenderit!provident nesciunt aliquam neque laboriosam architecto, minus, quaerat reiciendis dolores! Suscipit pariatur ipsum reprehenderitprovident nesciunt aliquam neque laboriosam architecto, minus, quaerat reiciendis dolores! Suscipit pariatur ipsum reprehenderit</Text>
   

     </ScrollView>
     </View>
     
   )
 }

 const renderBookButton = () => {
   return (
     <View style={{ flex:1, flexDirection:"row"}}>
     {/* Bookmark */}
<TouchableOpacity style={{width:50,alignItems:"center",justifyContent:"center",backgroundColor:"black",marginLeft:10,marginVertical:10,borderRadius:5}}
onPress={() => console.log("Bookmarked")}>

<FontAwesome5 name="bookmark" size={24} color="white" />

</TouchableOpacity>
     {/* Start reading */} 
       <TouchableOpacity style={{flex:1,backgroundColor:"#062252",marginHorizontal:15,marginVertical:10,borderRadius:5,alignItems:"center",justifyContent:"center"}} onPress={() => console.log("continue reading")}>
       <Text style={{fontSize:18,color:"white"}}>Continue reading</Text>

       </TouchableOpacity>
     </View>

   )
 }

    return (
      <View style={{ flex: 1, width: "100%", backgroundColor: "#26539e" }}>
        {/* Book cover section */}
        <View style={{ flex: 4 }}>{renderBookInfoSection()}</View>
        {/* Description */}
        <View style={{ flex: 2 }}>
{renderBookDescriptioin()}
        </View>
        {/* Button */}
        <View style={{ height: 70,marginBottom:10 }}>
          {renderBookButton()}
        </View>
      </View>
    );
  
};

export default BookDetail;
