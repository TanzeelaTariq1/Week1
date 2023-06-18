import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
      }}>
      <Text style={{fontSize: 18,color: 'black',textAlign: 'center',fontWeight:'bold'}}> All rights reserved by Little Lemon,2023 {' '}</Text>
    </View>
  );
}