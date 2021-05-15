import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

class DeviceList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Devices: [],
      deviceChosen = None
    }
  }

  _displayDetailForDevice = (idDevice) => {
    console.log("Display Device " + idDevice)
    this.props.navigation.navigate('DeviceDetail', {idDevice: idDevice})
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
            renderItem={({ item }) => <Text style={styles.row}
            onPress={this.deviceChosen.setState(item.id), this.GetFlatListItem.bind(this, this.deviceChosen)} >{item.title}</Text>}
            style={{ marginTop: 10 }} />
    
        </View>
    )
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
})

const mapStateToProps = state => {
  return {
    favoritesDevice: state.favoritesDevice
  }
}

export default connect(mapStateToProps)(DeviceList)