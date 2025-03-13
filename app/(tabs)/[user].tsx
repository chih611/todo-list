import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function UserProfile() {
    const { user } = useLocalSearchParams(); // Get dynamic "user" from URL

    return (
        <View>
            <Stack.Screen options={{ title: '' + user }} />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome, {user}!</Text>
        </View>
    );
}
