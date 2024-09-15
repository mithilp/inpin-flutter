// screens/people.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PeopleScreen() {
  return (
    <View style={styles.container}>
      <Text>Today's People</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});