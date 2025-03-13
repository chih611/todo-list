import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { Platform } from 'react-native';
import { Link, Slot, Tabs } from 'expo-router';
export default function RootLayout() {

  if (Platform.OS === 'web') {
    // Use a basic custom layout on web.
    return (
      <div style={{ flex: 1 }}>
        <header>
          <Link href="/">Home</Link>
          <Link href="/settings">Settings</Link>
        </header>
        <Slot />
      </div>
    );
  }
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="(tabs)" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'Home',
              title: 'Overview',
            }}
          />
          {/* <Drawer.Screen
            name="about" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: 'About',
              title: 'About',
            }}
          /> */}
        </Drawer>
      </GestureHandlerRootView>
    </>

  );

}
