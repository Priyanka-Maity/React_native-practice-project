import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Wishlist from '../screens/Wishlist';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Payment from '../screens/Payment';
import Search from '../screens/Search';
import Notification from '../screens/Notification';
import { Ionicons } from '@expo/vector-icons';
import Account from '../screens/Account'
export default function MainNavigator() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const TabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home';
                        }
                        if (route.name === 'Wishlist') {
                            iconName = focused
                                ? 'md-heart'
                                : 'md-heart';
                        }
                        else if (route.name === 'Notification') {
                            iconName = focused ? 'ios-notifications' : 'ios-notifications';
                        }
                        else if (route.name === 'Account') {
                            iconName = focused ? 'md-wallet' : 'md-wallet';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={30} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'purple',
                    inactiveTintColor: '#b19cd9',
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Wishlist" component={Wishlist} />
                <Tab.Screen name="Notification" component={Notification} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={null} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Orders" component={Orders} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
