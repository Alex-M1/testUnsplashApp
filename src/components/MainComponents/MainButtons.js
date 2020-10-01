import React from 'react'
import { Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'


export default function MainButtons(props) {
    let currentPage = props.currentPage
    const prev = () => {
        if (currentPage !== 1) currentPage--
        else currentPage = 1
        props.setCurrentPage(currentPage)
    }
    const longPrev = (e) => {
        if (currentPage > 10) currentPage -= 10
        else currentPage = 1
        props.setCurrentPage(currentPage)
    }
    const next = () => {
        currentPage++
        props.setCurrentPage(currentPage)
    }
    const longNext = () => {
        currentPage += 10
        props.setCurrentPage(currentPage)
    }
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={prev} onLongPress={longPrev} >
                <Text style={styles.buttonText}>Предыдущая</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={next} onLongPress={longNext}>
                <Text style={styles.buttonText}>Следующая</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 35,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    buttonText: {
        color: '#fff'
    },
    choosePage: {
        width: 60,
        backgroundColor: '#fff',
        opacity: 0.3,
        borderRadius: 8,
    }
})