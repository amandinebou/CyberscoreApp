import * as React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

export default function HistScreen() {
  return (
    <View style = {styles.container}>

        <ScrollView style = {styles.scrollContainer}>

        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
});

