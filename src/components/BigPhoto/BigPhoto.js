import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function BigPhoto(props) {
    const navigator = useNavigation()
    const toMainPage = () => {
        props.setBigPhoto(null)
        navigator.navigate('MainPage')
    }
    return (
        <ImageBackground style={styles.bigImage} source={{ uri: props.bigPhotoUrl }}>
            <TouchableOpacity style={styles.closeButton} onPress={toMainPage}>
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bigImage: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#acadad',
        alignSelf: 'flex-end',
        marginTop: 30,
        marginRight: 10,
        opacity: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 18
    }
})