import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';
import MenuItems from './component/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <TextInput />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});