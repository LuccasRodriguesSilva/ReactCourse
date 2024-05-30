import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome } from '../pages/Welcome'
import { Signin } from '../pages/Signin'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                option={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
                option={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
