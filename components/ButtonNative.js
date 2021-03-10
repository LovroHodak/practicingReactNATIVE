import React from "react";
import {Button, StyleSheet, View } from "react-native";

const ButtonNative = () => {

    const onPressButton = () => {
        alert('you tapped')
    }

    return (
        <View style={styles.container}>
            <Button title='Press' onPress={onPressButton} style={styles.button} />
            <Button title='Press me' onPress={onPressButton} style={styles.button} />
            <View style={styles.buttonContainer}>
                <Button title='Great job' onPress={onPressButton} color='black' />
                <Button title='Tnx!' onPress={onPressButton} color='tomato' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'space-around'
    },
    button: {
        padding: 20,
    },
    buttonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ButtonNative