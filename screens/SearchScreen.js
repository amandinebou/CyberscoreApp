import React, { Component } from 'react';
 
import { ActivityIndicator, Alert, TouchableOpacity, FlatList, Text, StyleSheet, View, TextInput, Image } from 'react-native';
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
      const itemData = item.nom.toUpperCase();
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
            height: 0.1,
            width: "100%",
            backgroundColor: "#d7d7d7",
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
          <View style={styles.main_container} >
        
        <Image style = {styles.image} source = {item.image} />

        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text} onPress={this.GetFlatListItem.bind(this, item)}>{item.nom}</Text>
            <Text style={styles.vote_text}>{item.note}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{item.description}</Text>
          </View>
          <View style={styles.entr_container}>
            <Text style={styles.entr_text}>{item.entreprise}</Text>
          </View>
        </View>
      </View>
          
          }/>
 
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
 
  },

  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  entr_container: {
    flex: 1
  },
  entr_text: {
    textAlign: 'right',
    fontSize: 14
  }
});