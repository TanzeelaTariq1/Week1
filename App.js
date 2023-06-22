import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';
//import MenuItems from './component/MenuItems';
import Welcome from './component/Welcome';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Welcome/>
      </View>
      
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
   backgroundColor:'lightgreen',
    
  },
  footerContainer: { backgroundColor: 'lightgreen' },
});