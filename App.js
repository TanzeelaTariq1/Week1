import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LittleLemonHeader from './component/LittleLemonHeader';
import LittleLemonFooter from './component/LittleLemonFooter';

export default function App() {
  return (
    <>
    <View style={{flex: 1,backgroundColor:'lightgreen'}}>
      <LittleLemonHeader/>
    </View>
    <View style={{flex: 1,justifyContent:'flex-end',backgroundColor:'lightgreen'}}>
      <LittleLemonFooter/>
    </View>
    </>
  );
};
