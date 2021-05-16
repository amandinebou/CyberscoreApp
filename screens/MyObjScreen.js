import React from 'react'
import { View,FlatList, StyleSheet, Text, Image } from 'react-native'

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
          backgroundColor: "grey",
        }}
      />
    );
  }

  render() {
    
    return (
      <View>
        <FlatList
        data={this.props.favoritesDevice}
        keyExtractor={(item) => item.id}
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
      </View>}  
        style={{ marginTop: 10 }} 
        
        
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
})

const mapStateToProps = state => {
  return {
    favoritesDevice: state.favoritesDevice
  }
}

export default connect(mapStateToProps)(MyObjScreen)