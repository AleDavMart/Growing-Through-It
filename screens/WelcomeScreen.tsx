import { whileStatement } from "@babel/types";
import { StackRouter } from "@react-navigation/routers";
import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { StyleSheet, Platform, Button, Pressable, ImageBackground } from "react-native";
import { View, Text } from "../components/Themed";

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/MoodTracker.png')}
                resizeMode="cover" style={styles.image}>
                <Pressable onPress={() => navigation.navigate("Root")} style={styles.button}>
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
const buttonColor = '#FFF9DF';
// const buttonColor = '#ACC2A0';
const buttonTextColor = '#ACC2A0';
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
        backgroundColor: buttonColor,
        borderRadius: 50,
        width: 200,
        height: 50,
        alignItems: 'center',
        padding: 12,
        margin: 'auto',
        marginBottom: '20%'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: buttonTextColor,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: "center"
    },
});