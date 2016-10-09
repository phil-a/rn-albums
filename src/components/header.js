import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
 const { viewStyle, textStyle } = styles;
 
 return (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums</Text>
    </View>
 );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: 'whitesmoke',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },  
  textStyle: {
    fontSize: 20
  }
};

export default Header;
