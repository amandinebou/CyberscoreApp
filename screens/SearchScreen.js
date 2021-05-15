import React, { Component } from 'react';
 
import { ActivityIndicator, Alert, TouchableOpacity, FlatList, Text, StyleSheet, View, TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import DeviceDetail from '../components/DeviceDetail';

 
export default class SearchScreen extends React.Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
      isLoading: true,
      text: '',
      data: [],
      idDevice: 0,
      myDevice: undefined
    }
 
    this.arrayholder = [];
  }
 
  componentDidMount() {
 
    return fetch('https://my-json-server.typicode.com/amandinebou/CyberscoreApp/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  GetFlatListItem(device) {

    this.setState({myDevice: device})
    this.props.navigation.navigate("DeviceDetail",  {myDevice: device});
  }
 
  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      data: newData,
      text: text
      })
    }
 
    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }
    

    render() {
      
      return (
        
        <View style={styles.MainContainer}>
        
        <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Here" />
 
        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => 
          <View>
         
          <Text style={styles.row}
          onPress={this.GetFlatListItem.bind(this, item)} >{item.title}</Text>
          </View>}
          style={{ marginTop: 10 }} />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
 
  },
 
  row: {
    fontSize: 18,
    padding: 12
  },
 
  textInput: {
 
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"
 
  }
});