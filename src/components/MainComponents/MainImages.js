import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';


export default function MainImages(props) {
    const navigation = useNavigation()
    let data = props.data
    console.log(props);
    const toBigPhoto = () => {
        props.setBigPhoto(data.urls.full)
        navigation.navigate('Photo')
    }
    return (
        <>
            <View key={data.id} style={styles.imagesBlock}>
                <TouchableOpacity onPress={toBigPhoto}>
                    <ImageBackground
                        source={{ uri: data.urls.small }}
                        style={styles.images}
                    >
                        <Text style={styles.imagesText}>{data.alt_description}</Text>
                        <Text style={styles.imagesText}>{data.user.name}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </>
    )
}

const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    imagesBlock: {
        width: '50%',
        height: windowHeight * 0.335
    },
    images: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    imagesText: {
        color: '#fff',
        paddingHorizontal: 3,
        paddingVertical: 12,
        fontWeight: 'bold',
        fontSize: 10
    }

})