import React from 'react';
import { Button, Text, View } from 'react-native';
import UserData from './components/usercomponent';
/*
above to import UserData no need of {} because we use keyword
called default
function ram(){
  return "kasto hello";
}
*/



function App(): React.JSX.Element {

  let s = "rama";

  const ram=(val:string)=>
   


  { 
    val = s; 
    return console.warn(val);}

  

  /*
  -to master any programming language make a habit of 1. reading error then resolve
   2. Do not make same mistake again once you learn something that should be in your
   head permanently(by using that again and agian in your code)
  App(): React.JSX.Element-- meaning function App return JSX element which is ui of any app,you can
  see App function donot take any argument since, App()--is void

below {{fontSize:60}}--first {}outer represent js expression, inner {} represnt for style
*/
  return (
    <View>
     
      
      <Text style={{ fontSize:35 }}>K chha</Text>
      <Button
      title='press me' color={'black'} onPress={ ()=>  ram('no hello')}></Button>
      <Text>
        hello
      </Text>
      <Button
      title='press me2'></Button>
    </View>
  );
}


export default App;
