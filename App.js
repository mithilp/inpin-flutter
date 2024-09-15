import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Importing icons

// Screens
import RecordScreen from './screens/record';
import PeopleScreen from './screens/people';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Record') {
            iconName = 'microphone'; // Recording icon
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'People') {
            iconName = 'account-group'; // People icon
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Record" component={RecordScreen} />
      <Tab.Screen name="People" component={PeopleScreen} />
    </Tab.Navigator>
  );
}

// Create Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}