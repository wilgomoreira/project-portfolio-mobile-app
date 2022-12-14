import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Home from '../pages/Home';
import ProjectEcommerce from '../pages/ProjectEcommerce'
import ProjectForm from '../pages/ProjectForm'
import ProjectQuotes from '../pages/ProjectQuotes';
import ProjectChecklist from '../pages/ProjectChecklist';


export default function Routes() {
    const Tab = createMaterialTopTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#21243D',
                    tabBarLabelStyle: { fontSize: 11, },
                    tabBarStyle: { backgroundColor: '#EDF7FA' },
                    tabBarScrollEnabled: true,
                    tabBarItemStyle:{width: 90}
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarLabel: 'About Me' }}
                />

                <Tab.Screen
                    name="ProjectChecklist"
                    component={ProjectChecklist}
                    options={{ tabBarLabel: 'Checklist' }}
                />

                <Tab.Screen
                    name="ProjectEcommerce"
                    component={ProjectEcommerce}
                    options={{ tabBarLabel: 'E-commerce' }}
                />
                <Tab.Screen
                    name="ProjectForm"
                    component={ProjectForm}
                    options={{ tabBarLabel: 'Form' }}
                />
                <Tab.Screen
                    name="ProjectQuotes"
                    component={ProjectQuotes}
                    options={{ tabBarLabel: 'Quotes' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}