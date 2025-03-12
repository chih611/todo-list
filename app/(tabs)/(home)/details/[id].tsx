import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
    const { id } = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{ title: "Details " + id }} />
            <View style={styles.container}>
                <Text>Details of user {id} </Text>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
