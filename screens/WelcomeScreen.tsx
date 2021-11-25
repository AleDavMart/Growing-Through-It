import { whileStatement } from "@babel/types";
import { StackRouter } from "@react-navigation/routers";
import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { StyleSheet, Platform, Button, Pressable, ImageBackground } from "react-native";
import { View, Text } from "../components/Themed";

export default function WelcomeScreen({ navigation }) {
    const image = { uri: '../assets/images/MoodTracker.png' };
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Growing Through It</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Pressable
                    onPress={() => navigation.navigate("Root")}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Let's Grow
                    </Text>
                </Pressable>
                {/* Use a light status bar on iOS to account for the black space above the modal */}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </ImageBackground>
        </View>
    );
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
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        backgroundColor: '#5aab61',
        borderRadius: 50,
        width: 200,
        height: 50,
        alignItems: 'center',
        padding: 12
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});