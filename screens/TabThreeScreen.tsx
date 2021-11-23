import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen({ navigation }) {
    const [userNameText, setUserNameText] = useState("");
    const [root1FNText, setRoot1FNText] = useState("");
    const [root1LNText, setRoot1LNText] = useState("");
    const [root1PNText, setRoot1PNText] = useState("");

    var isNew = true;
    if (isNew) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>User Name</Text>
                <TextInput
                    style={{ height: 40, padding: 10, width: 250 }}
                    placeholder="Something unique & anonymous..."
                    onChangeText={userNameText => setUserNameText(userNameText)}
                    defaultValue={userNameText}
                />
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                {/* <Text style={{ padding: 10, fontSize: 42 }}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text> */}
                <Text style={styles.title}>Root #1</Text>
                <TextInput
                    style={{ height: 40, padding: 10 }}
                    placeholder="First Name"
                    onChangeText={root1FNText => setRoot1FNText(root1FNText)}
                    defaultValue={root1FNText}
                />
                <TextInput
                    style={{ height: 40, padding: 10 }}
                    placeholder="Last Name"
                    onChangeText={root1LNText => setRoot1LNText(root1LNText)}
                    defaultValue={root1LNText}
                />
                <TextInput
                    style={{ height: 40, padding: 10 }}
                    placeholder="Phone Number"
                    onChangeText={root1PNText => setRoot1PNText(root1PNText)}
                    defaultValue={root1PNText}
                />
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Button
                    title="Save"
                    onPress={() => navigation.navigate("Root")}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Tab Three</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginTop: 5,
        marginBottom: 15,
        height: 1,
        width: '80%',
    },
});
