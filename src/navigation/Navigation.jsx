import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Onboarding3 from '../screens/Onboarding3';
const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboardingfirst" options={{headerShown:false}} component={Onboarding1} />
            <Stack.Screen name="Onboarding2" options={{headerShown:false}} component={Onboarding2} />
            <Stack.Screen name="Onboarding3" options={{headerShown:false}} component={Onboarding3} />
        </Stack.Navigator>
    )
}

export default Navigation
