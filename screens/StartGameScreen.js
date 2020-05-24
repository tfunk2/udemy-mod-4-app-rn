import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }

    let confirmedOutput;

    if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>The Game Screen</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        onChangeText={numberInputHandler} 
                        value={enteredValue} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        keyboardType="numeric" 
                        maxLength={2} 
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.innerButtonContainer}>
                            <Button color={Colors.secondary} style={styles.button} title="Reset" onPress={resetInputHandler} />
                        </View>
                        <View style={styles.innerButtonContainer}>
                            <Button color={Colors.primary} style={styles.button} title="Confirm" onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    innerButtonContainer: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})

export default StartGameScreen