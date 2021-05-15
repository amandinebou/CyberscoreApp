// Navigation/Navigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image ! 
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer,  } from 'react-navigation'
import SearchScreen from '../screens/SearchScreen.js'
import DeviceDetail from '../Components/DeviceDetail'
import MyObjScreen from '../screens/MyObjScreen.js'

const SearchStackNavigator = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  DeviceDetail: {
    screen: DeviceDetail,
    navigationOptions: {
        title: ''
    }
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: MyObjScreen,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  DeviceDetail: {
    screen: DeviceDetail,
    navigationOptions: {
      title: ''
    }
  }
})

const DevicesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
          return <Image
            source={require('../assets/images/search.png')}
            style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../assets/images/favoris.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
      inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
      showLabel: false, // On masque les titres
      showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(DevicesTabNavigator)