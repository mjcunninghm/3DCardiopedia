import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen.js';
import PatientPortal from './components/PatientPortal.js';
import CareTeamPortal from './components/CareTeamPortal.js';
import Library from './components/Library.js';
import ModelScreen from './components/ModelScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Patient Portal') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Care Team Portal') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2227ff',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Patient Portal"
        component={PatientPortal}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Care Team Portal"
        component={CareTeamPortal}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Model Screen"
          component={ModelScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
