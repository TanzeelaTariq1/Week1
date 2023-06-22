import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../Images/LittleLemonLogo2.jpg')} />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
    color:'yellow',
  },
  container: {
    flex: 0.2,
    paddingBottom: 65,
    paddingLeft:65,
    paddingRight:65,
    backgroundColor: 'lightgreen',
  },

  title: {
   
    paddingVertical: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle:'italic'
  },
});

export default Welcome;