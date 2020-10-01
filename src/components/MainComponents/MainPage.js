import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import MainButtons from './MainButtons'
import MainImages from './MainImages'


export default function MainPage(props) {
    let data = props.imageData,
        [img, setImg] = useState(null),
        mainImage

    useEffect(() => {
        mainImage = data.map(el => {
            return <MainImages data={el} setBigPhoto={props.setBigPhoto} key={el.id} />
        })
        setImg(mainImage)
    }, [])
    return (
        <View style={styles.main}>
            {img}
            <View style={styles.buttonBlock}>
                <MainButtons setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} />
            </View>
        </View>
    )
}


const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 200
    },
    buttonBlock: {
        width: '100%',
        position: 'absolute',
        justifyContent: 'space-between',
        top: windowHeight * 0.9,
        flexDirection: 'row',
        paddingHorizontal: '3%'
    },
})