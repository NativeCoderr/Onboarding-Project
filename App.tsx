import React from 'react'
import Onboarding1 from './src/screens/Onboarding1'
import Onboarding2 from './src/screens/Onboarding2'
import Onboarding3 from './src/screens/Onboarding3'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App
