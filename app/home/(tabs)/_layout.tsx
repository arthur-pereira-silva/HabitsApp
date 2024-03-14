import { Tabs } from "expo-router"
import { FontAwesome } from '@expo/vector-icons'

export default function TabLayout(){
    return (
            <Tabs screenOptions={{tabBarActiveTintColor: 'black'}}>
                <Tabs.Screen
                name='index'
                options={
                    {  
                        title: 'Home',
                        tabBarIcon: ({color}) => <FontAwesome name='home' size={28} color={color} />
                    }
                } />
                <Tabs.Screen
                name='settings'
                options={{
                    title: 'Configurações',
                    tabBarIcon: ({color}) => <FontAwesome name='cog' size={28} color={color} />
                }} />
            </Tabs>
    )
}