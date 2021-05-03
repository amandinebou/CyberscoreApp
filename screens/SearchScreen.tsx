import * as React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, Keyboard, StyleSheet, Image } from 'react-native';


import { SearchBar } from 'react-native-elements';

export default class SearchScreen extends React.Component {

  state = {
  search: '',
  };
  updateSearch = (search: any) => { this.setState({ search });
  };
  render() {
  const { search } = this.state;
  return (
    <View style={styles.container}>
      
      <SearchBar
        placeholder="Type Here to Search..." onChangeText={this.updateSearch} value={search}
      />
  
      <ScrollView style = {styles.scrollContainer}>
  
      </ScrollView>
  
    </View>
  );
  }
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
  