import * as React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, Keyboard, StyleSheet, Image } from 'react-native';

import DevicesItem from '../components/DevicesItems.js';
import devices from '../Data/DevicesData'
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
  
      <FlatList style={styles.list}
      data = {devices}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <DevicesItem device={item}/>}
      />
  
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
    list: {
      flex: 1,
    },
  });
  