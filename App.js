import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ComponentA from './src/ComponentA'
import ComponentB from './src/ComponentB'
import ComponentC from './src/ComponentC'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>    
            <Stack.Navigator>
                <Stack.Screen name="ChildA" component={ComponentA} />
                <Stack.Screen name="ChildB" component={ComponentB} />
                <Stack.Screen name="ChildC" component={ComponentC} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App