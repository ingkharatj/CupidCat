import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

    // const [recording, setRecording] = React.useState();
    const recording = new Audio.Recording();

    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            //   await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            //   await recording.startAsync(); 
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            // setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        console.log('Stopping recording..');
        // setRecording(undefined);
        // await recording.stopAndUnloadAsync();
        await recording.getStatusAsync()

        // const uri = recording.getURI();
        console.log('Recording stopped and times =', (await recording.getStatusAsync()).durationMillis);
    }

    return (
        <View >
            <Button
                title={'Start Recording'}
                // title={recording ? 'Stop Recording' : 'Start Recording'}

                // onPress={recording ? stopRecording : startRecording}
                onPress={startRecording}
            />
            <Button
                title={'Stop Recording'}
                // onPress={recording ? stopRecording : startRecording}
                onPress={stopRecording}
            />
        </View>
    );
}

