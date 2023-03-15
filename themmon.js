import React from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity,ScrollView,Button,StyleSheet,Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
export default function themmon() {
  
    return (
        <View style={styles.container}>
            <Image  style={{size:"100", }}source = {require ('./menu.png')}></Image>
            <Text style={{fontWeight:'bold', fontSize: 24,  marginTop: 15}}> Viết gì đó mới </Text>
            <Text style={{color:'gray', marginTop: 15}}> Hãy truyền cảm hứng vào bếp cho mọi người</Text>
            <Button style={{color:'#495057', with:100, height: 50}}>
            <FontAwesome5 style = {{}} name="lightbulb" size={15} color="gray"
                  />
            </Button>
            <View style={styles.footer}>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('Settings')}>
                <FontAwesome5 style = {{}} name="home" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="plus-square" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <View  style={styles.c5}>
                  <FontAwesome5 style = {{}} name="search" size={30} color="orange"
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="heart" size={30} color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.c4} onPress={()=>navigation.navigate('DanhSach')}>
                <FontAwesome5 style = {{}} name="user-circle" size={30} color="black"
                />
            </TouchableOpacity>
        </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,  
      alignItems:'center'   ,
      justifyContent:'center',
    },
    footer: {
        height:'10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection:'row',
        elevation:3,
        
      },
  });
