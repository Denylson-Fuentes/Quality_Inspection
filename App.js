import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginProvider from './Components/Context/LoginProvider';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Components/Navigator';


export default function App() {
  return (
    <LoginProvider>
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    </LoginProvider>
  );
}
