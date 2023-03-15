import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground style={{flex:1}} source={{uri:'background.jpeg'}}>
    <View style={styles.container}>
      
      <Text>Các món ngon say đắm từ bếp trưởng </Text>   
      <Image  style={{height:20, width:20 ,borderWidth: 1, 
        marginTop: -15, marginLeft: -265,}} 
        source = {require ('./logo.png')}/>  
      
      <Image   style={{height:20, width:20 ,borderWidth: 1,
         marginTop: -20, marginLeft: 260,}} source = {require ('./logo.png')}/>  
      
      <Text style={{color: 'black', fontSize : 20, marginTop: 20, fontWeight: 'bold',}}>Các món mới nhất </Text>
      <FontAwesome5 style = {{marginTop: -23, marginLeft: -195 }} name = "utensils" size= {20} color='orange'/>
      <FontAwesome5 style = {{marginTop: -23, marginLeft: 190 }} name = "hamburger" size= {20} color='orange'/>
      <Image  style={{height:25, width:25 , 
        marginTop: 25, marginLeft: -325,borderRadius: 15}} source = {require ('./avatar.jpg')}/> 
        <Text style style={{color: 'gray', marginTop: -20, marginLeft: -166}}>Bếp trường phake </Text>
      <View
        style={{height:220, width:170 ,borderWidth: 1,borderColor: '#D4D1CD',
        borderRadius: 5, marginTop: 5, marginLeft: -180,}} 
      >
        <Image style ={{height:140,width:169,borderRadius: 5}} source = {require( './banhmi.jpg')}></Image>
        <FontAwesome5 style = {{marginTop: -20, marginLeft: 150 }} name = "bookmark" size= {15} color='white'/>
        <Text style={{color: 'black',  marginTop: -5, padding: 10,
        }}>Bánh mì nướng muối ớt </Text>
        <FontAwesome5 style = {{marginTop: 20, marginLeft: 10 }} name = "heart" size= {15} color='pink'/>
      </View>
      <View
        style={{height:220, width:170 ,borderWidth: 1,borderColor:'#D4D1CD',
        borderRadius: 5, marginTop: -219, marginLeft:180,}}
      >
        <Image style ={{height:100,width:100,}} source={{uri: './banhmi.jpg'}}></Image>
        <Text style={{color: 'black',  marginTop: 10, padding: 10,
        }}>Bánh mì nướng muối ớt </Text>
      </View>

      <View
        style={{height:220, width:170 ,borderWidth: 1,borderColor: '#D4D1CD',
        borderRadius: 5, marginTop: 45, marginLeft: -180,}} 
      >
        <Image style ={{height:100,width:100,}} source={{uri: './banhmi.jpg'}}></Image>
        <Text style={{color: 'black',  marginTop: 10, padding: 10,
        }}>Bánh mì nướng muối ớt </Text>
      </View>
      <View
        style={{height:220, width:170 ,borderWidth: 1,borderColor:'#D4D1CD',
        borderRadius: 5, marginTop: -219, marginLeft:180,}}
      >
        <Image style ={{height:100,width:100,}} source={{uri: './banhmi.jpg'}}></Image>
        <Text style={{color: 'black',  marginTop: 10, padding: 10,
        }}>Bánh mì nướng muối ớt </Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginTop : 40,
    borderWidth : 1,
    borderColor: '#D4D1CD',
  },
  
});
