/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import HistScreen from '../screens/HistScreen';
import MyObjScreen from '../screens/MyObjScreen';
import SearchScreen from '../screens/SearchScreen';
import { BottomTabParamList, HistParamList, MyObjParamList, SearchParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="MyObj"
      tabBarOptions={{
        activeBackgroundColor: '#252525',
        inactiveBackgroundColor: '#252525',
        activeTintColor: 'white',
        inactiveTintColor: '#DCDCDC'}}
      >
      <BottomTab.Screen
        name="Hist"
        component={HistNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyObj"
        component={MyObjNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} color={'#E91E63'} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HistStack = createStackNavigator<HistParamList>();

function HistNavigator() {
  return (
    <HistStack.Navigator>
      <HistStack.Screen
        name="HistScreen"
        component={HistScreen}
        options={{
          headerTitle: 'Historique',
          headerTitleStyle: {
            color: '#DCDCDC',
          },
          headerStyle: {
            backgroundColor: '#E91E63',
          }
        }}
        
      />
    </HistStack.Navigator>
  );
}

const MyObjStack = createStackNavigator<MyObjParamList>();

function MyObjNavigator() {
  return (
    <MyObjStack.Navigator>
      <MyObjStack.Screen
        name="MyObjScreen"
        component={MyObjScreen}
        options={{
          headerTitle: 'My IoT devices',
          headerTitleStyle: {
            color: '#DCDCDC',
          },
          headerStyle: {
            backgroundColor: '#E91E63',
          }
        }}
        
      />
    </MyObjStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ 
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#E91E63',
          },
        }}
      />
    </SearchStack.Navigator>
  );
}
