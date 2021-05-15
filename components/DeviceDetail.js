import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button } from 'react-native'


import { connect } from 'react-redux'

class DeviceDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      device: undefined
    }
  }

  _toggleFavorite(device) {
    const action = { type: "TOGGLE_FAVORITE", value: device }
    this.props.dispatch(action)
  }


  _displayDevice(device) {
    if (device != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          
          <Text style={styles.title_text}>{device.id} {device.title}</Text>
          <Button title="Favoris" onPress={() => this._toggleFavorite(device)}/>
          <Text style={styles.description_text}>blablablablalbablblalblablabla</Text>
          <Text style={styles.default_text}>Note : 7 / 10</Text>
        </ScrollView>
      )
    }
    else {
      return (
        <View>
          <Text>Device non choisi</Text>
        </View>
      )
    }
  }

  render() {
    
    return (
      <View style={styles.main_container}>
        {this._displayDevice(this.props.navigation.state.params.myDevice)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesDevice: state.favoritesDevice
  }
}

export default connect(mapStateToProps)(DeviceDetail)