import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image,ScrollView} from 'react-native';


export default function ctsp() {
  return (
       
    <ScrollView style={styles.container}>
         <Image  style={{height:280, width:353,borderRadius: 5 ,borderWidth: 1,borderColor:'#D4D1CD',
         marginTop: 10}} source = {require ('./banhmi.jpg')}/>  
         <Text style={{fontWeight:'bold', fontSize: 18, marginLeft: 5, marginTop: 15}}> 1 </Text>
        <Image  style={{height:35, width:35,
        marginTop: 15, marginLeft: 8,borderRadius: 15}} source = {require ('./avatar.jpg')}/> 
        <Text style style={{color: 'gray', marginTop: -25, marginLeft: 46,}}>Bếp trường phake </Text>
        <Text style={{fontSize: 15, marginLeft:5, marginTop: 25, }}> 2  </Text>
          <Text style={{borderBottomWidth: 1,marginTop: 5,
         width:335,borderColor: '#D4D1CD'}}></Text>
     
     <Text style={{fontWeight:'bold',fontSize: 17, marginLeft: -250, marginTop: 15}}> Nguyên liệu </Text>
     <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> 1 </Text>
     <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> 3 quả trứng cút  </Text>
    <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> 1 cái xúc xích  </Text>
    <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Pate  </Text>
    <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Sốt dầu trứng  </Text>
    <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Hành lá  </Text>
    <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Tương ớt, sốt mayo  </Text>
    <Text style={{fontSize: 15, marginLeft:-5, marginTop: 25, borderBottomWidth: 1,
         width:335,borderColor: '#D4D1CD'}}> Muối ớt, đường, bơ, sa tế  </Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
     container: {
       flex: 1,
      
       marginTop : 40,
       
       
     },
     
   });



