

import React from 'react';

import {


  Text,
  View,


} from 'react-native';


function App(): React.JSX.Element {



      /*
      App(): React.JSX.Element-- meaning function App return JSX element which is ui of any app,you can
      see App function donot take any argument since, App()--is void

  below {{fontSize:60}}--first {}outer represent js expression, inner {} represnt for style
*/


  return (
    <View>
      
      <Text style={{fontSize:20}}>Hello handsomeee</Text>

    </View>


  );
}


export default App;
