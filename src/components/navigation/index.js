import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../../screens/SignInScreen'
import HomePage from '../../screens/HomePage'
import ElevPage from '../../screens/ElevPage'

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="ElevPage" component={ElevPage} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;