import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#305fab',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Tabs.Screen name="(home)"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                }} />
            <Tabs.Screen
                name="[user]"
                options={{
                    // href: "/evanbacon",
                    href: {
                        pathname: "/[user]",
                        params: {
                            user: "hao",
                        },
                    },
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} /> }} />

        </Tabs>

    );
}
