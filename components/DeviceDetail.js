import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Image, Button } from 'react-native'
import Panel from './Panel';

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
  _color_note(device) {
        if (device.note == 0) {
            return (
            <Text style={styles.note_green }>No Risk <br/>{device.note}/10</Text>)
        }
        else if (device.note <4 ) {
            return (
            <Text style={styles.note_green }>Low Risk <br/>{device.note}/10</Text>)
        }
        else if (device.note <7 ) {
            return (
            <Text style={styles.note_orange }>Medium Risk <br/>{device.note}/10</Text>)
        }
        else if (device.note <9 ) {
            return (
            <Text style={styles.note_red }>High Risk <br/>{device.note}/10</Text>)
        }       
        else{
            return (
            <Text style={styles.note_red }>Critical Risk <br/>{device.note}/10</Text>)
        }
  }

  _displayStarRating(device) {
        var starImage = require('../assets/images/1star.png')
        if (device.note == 0) {
            starImage = require('../assets/images/5stars.png')
        }
        else if (device.note <4) {
            starImage = require('../assets/images/4stars.png')
        }
        else if (device.note <7) {
            starImage = require('../assets/images/3stars.png')
        }
        else if (device.note <9) {
            starImage = require('../assets/images/2stars.png')
        }

        return (
            <Image style={styles.image_rating} source={starImage}/>
        )

  }

  _displayFavoriteImage(device) {
    var sourceImage = require('../assets/images/nonfav.png')
    if (this.props.favoritesDevice.findIndex(item => item.id === device.id) !== -1) {
      // Device dans nos favoris
      sourceImage = require('../assets/images/fav.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
}


  _displayDevice(device) {

    if (device != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          
          <Text style={styles.title_text}> {device.nom}</Text>
          
          <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite(device)}>
              {this._displayFavoriteImage(device)}
          </TouchableOpacity>
          <Image style={styles.image} source={device.image}/>
          {this._displayStarRating(device)}
          <Text style={styles.description_text}> {device.description}</Text>
          {this._color_note(device)}
          <Panel title={device.vulnerabilites}>
                <Text style={styles.default_text}>{device.detail}</Text>
          </Panel>
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
    //console.log(this.props)
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
    height: 200,
    width: 200,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15
  },

  image_rating: {
    height: 30,
    width: 180,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
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
    margin: 15,
    marginBottom: 15,
    textAlign: "center"
  },
  default_text: {
    margin: 15
  },
  favorite_container: {
    alignItems: 'center', 
  },
  favorite_image: {
    width: 40,
    height: 40
  },
  note_red: {
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color:'#ff0000'
  },
    note_orange: {
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color:'#ffa500'
  },
    note_green: {
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color:'#00ff00'
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesDevice: state.favoritesDevice
  }
}

export default connect(mapStateToProps)(DeviceDetail)