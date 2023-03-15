import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard} from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

import { ImageBackground } from 'react-native';
import { render } from 'react-dom';

export default function dangky() {
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.up}>
        <Image  style={{height:170, width:170}}source = {require ('./logo2.png')}></Image>
            <Text style={styles.title}>
              Cùng chia sẻ cảm hứng đến mọi người!</Text>
      </View> 

      <View style={styles.down}>
          <View style={styles.input}>
            <TextInput style={styles.txtinput}
              textContentType='emailAddress'
              keyboardType='email-address'
              placeholder='Nhập địa chỉ email của bạn'
            >
            </TextInput>
          </View>
          <View style={styles.input}>
          <TextInput style={styles.txtinput}             
              placeholder='Nhập mật khẩu của bạn'
              secureTextEntry={true}
            >
            </TextInput>
          </View>
          <View style={styles.input}>
          <TextInput style={styles.txtinput}             
              placeholder='Nhập lại mật khẩu của bạn'
              secureTextEntry={true}
            >
            </TextInput>
          </View>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.txtbtn}>
              Đăng Ký</Text>
      
          </TouchableOpacity>
          <View style={styles.divider}>
          <View style={styles.line}></View>
          <Text style={styles.text}>OR</Text>
          <View style={styles.line}></View> 
          </View>
          <FontAwesome.Button 
          style={styles.fbbtn}
          name="facebook"
          backgroundColor="#3b5998"
          >
          <Text style={styles.btntitle}>Đăng nhập bằng Facebook
          </Text>
          </FontAwesome.Button>
          <Text style={styles.txt}> Khi đăng ký, tức là bạn đã đồng ý với </Text>
            <Text style={styles.txt1}>Điều Khoản Dịch Vụ</Text>  
            <Text style={styles.txt2}>và </Text> 
            <Text style={styles.txt3}>Chính Sách Bảo Mật Thông Tin </Text> 
            <Text style={styles.txt4}>của chúng tôi</Text> 
      </View>
    </View>
    </TouchableWithoutFeedback>
        );
    
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234, 195, 176)'
  },
  txt:{
    color:'gray',
    fontSize:12,
    marginTop:50,
    marginLeft:-105
  },
  txt1:{
    color:'#3b5998',
    fontSize:12,
    marginTop:-17,
  marginLeft:198
  },
  txt2:{
    color:'gray',
    fontSize:12,
    marginLeft:-235
  },
  txt3:{
    color:'#3b5998',
    fontSize:12,
    marginTop:-16,
    marginLeft:-50
  },
  txt4:{
    color:'gray',
    fontSize:12,
    marginTop:-16,
    marginLeft:190
  },
  up:{
      flex:3,
      flexDirection: 'column', 
      justifyContent:'center',
      alignItems:'center'
  },
  down:{
    flexDirection: 'column',
    flex:7,
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  title:{
    color:'white',
    color:'rgb(255, 119, 34)',
    textAlign:'center',
    width:400,
    fontSize:18
  },
  input:{
    marginTop:25,
    paddingHorizontal:10,
    borderRadius:6,
    backgroundColor:'rgba(255,255,255,0.2)'
  },
  txtinput:{
    width:250,
    height:45
  },
  button:{
    marginTop:25,
    width:280,
    height:45,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(221, 97, 97)'
  },
  txtbtn:{
    fontSize:16,
    color:'white'
  },
  btntitle:{
    fontSize:16,
    color:'white'
  },
  fbbtn:{
    width:280,
    height:45,
    borderRadius:6,
    justifyContent:'center',

  },
  line:{
    height:1,
    flex:2,
    backgroundColor:'black'
  },
  text:{
    flex:1,
    textAlign:'center'
  },
  divider:{
    flexDirection:'row',
    height:40,
    width:298,
    justifyContent:'center',
    alignItems:'center',
  }
});
