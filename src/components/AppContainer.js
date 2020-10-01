import { connect } from "react-redux";
import React, { useEffect } from 'react';
import MainPage from "./MainComponents/MainPage";
import { getImage, setBigPhoto, setCurrentPage } from "../redux/image-reducer";
import Spinner from "react-native-loading-spinner-overlay";
import { createStackNavigator } from '@react-navigation/stack';
import BigPhoto from "./BigPhoto/BigPhoto";

function ImagesApp(props) {
    const Stack = createStackNavigator()
    useEffect(() => {
        props.getImage(props.currentPage)
    }, [])
    useEffect(() => {
        props.getImage(props.currentPage)
    }, [props.currentPage])

    let mainPage = () => {
        return props.isFetching ? <Spinner
            textContent={'Loading...'}
            visible={props.isFetching}
            color={'blue'}
            animation={'fade'}
        /> : <MainPage {...props} />
    }
    let bigPhoto = () => {
        return <BigPhoto bigPhotoUrl={props.bigPhotoUrl} setBigPhoto={props.setBigPhoto} />
    }
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="MainPage"
            >
                <Stack.Screen
                    name="MainPage"
                    component={mainPage}
                />
                <Stack.Screen
                    name="Photo"
                    component={bigPhoto}
                />
            </Stack.Navigator>
        </>
    )
}


let mapStateToProps = (state) => {
    return {
        imageData: state.imageData.images,
        isFetching: state.imageData.isFetching,
        currentPage: state.imageData.currentPage,
        bigPhotoUrl: state.imageData.bigPhotoUrl
    }
}

const AppContainer = connect(mapStateToProps, {
    getImage, setCurrentPage, setBigPhoto
})(ImagesApp)
export default AppContainer