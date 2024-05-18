import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DashboardScreen from '../../screens/dashboard';
import EditSpendingScreen from '../../screens/editSpending';
const Stack = createNativeStackNavigator<any>();

const DashboardRoute = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="EditSpending" component={EditSpendingScreen} />
        </Stack.Navigator>
    )
}

export default DashboardRoute;