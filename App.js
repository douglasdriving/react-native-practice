import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Examples from './components/exampleScreens';
import { styles } from './styles';

export default function App() {

  const [logged, setLogged] = useState();

  const Welcome = () => {
    return (
      <View style={[styles.container, styles.mid]}>
        <Text>Welcome to the app!</Text>
        <Button title='Log In ->' onPress={() => setLogged(true)}/>
      </View>
    )
  }

  const TopBar = () => {
    return(
      <View style={[{marginTop: 40}, styles.mid]}>
        <Button title='<- Log Out' onPress={() => setLogged(false)}/>
      </View>
    )
  }

  const Tab = createBottomTabNavigator();
  const pages = [
    'View',
    'Text',
    'Button',
    'ScrollView',
    'Image',
    'TextInput',

  ]
  const Main = () => {
    return(
      <View style={styles.container}>
        <TopBar />
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name='View' component={Examples.ViewExample} />
          <Tab.Screen name='Text' component={Examples.TextExample} />
          <Tab.Screen name='Button' component={Examples.ButtonExample} initialParams={{pages: pages}}/>
          <Tab.Screen name='ScrollView' component={Examples.ScrollViewExample} />
          <Tab.Screen name='Image' component={Examples.ImageExample} />
          <Tab.Screen name='TextInput' component={Examples.TextInputExample} />
          <Tab.Screen name='API' component={Examples.APIExample} />
        </Tab.Navigator>
      </View>
    )
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {logged ?
          <Stack.Screen name="Main" component={Main} /> :
          <Stack.Screen name="Welcome" component={Welcome} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
