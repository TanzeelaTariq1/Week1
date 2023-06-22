import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';
<<<<<<< HEAD
//import MenuItems from './component/MenuItems';
import Welcome from './component/Welcome';
=======
import MenuItems from './component/MenuItems';
>>>>>>> 76b4139ab98f8e7fa9568d19f11f73c0d102984d

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
<<<<<<< HEAD
        <Welcome/>
      </View>
      
=======
        <TextInput />
      </View>
>>>>>>> 76b4139ab98f8e7fa9568d19f11f73c0d102984d
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 2,
   backgroundColor:'lightgreen',
    
  },
  footerContainer: { backgroundColor: 'lightgreen' },
=======
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
>>>>>>> 76b4139ab98f8e7fa9568d19f11f73c0d102984d
});