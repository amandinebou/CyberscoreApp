import React from 'react'
import { View,FlatList, StyleSheet, Text } from 'react-native'

import { connect } from 'react-redux'

class MyObjScreen extends React.Component {

  constructor(props) {
 
    super(props);
 
    

  }

  GetFlatListItem(device) {
    this.props.navigation.navigate("DeviceDetail",  {myDevice: device});
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
      <View>
        <FlatList
        data={this.props.favoritesDevice}
        renderItem={({ item }) => 
        <View>
       
        <Text style={styles.row}
        onPress={this.GetFlatListItem.bind(this, item)} >{item.nom}</Text>
        </View> }  
        style={{ marginTop: 10 }} 
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={this.itemSeparator}
        
      />

      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  row: {
    fontSize: 18,
    padding: 12
  },
})

const mapStateToProps = state => {
  return {
    favoritesDevice: state.favoritesDevice
  }
}

export default connect(mapStateToProps)(MyObjScreen)