import { unsplashAPI } from "../axios/unsplashAPI";

const GET_IMAGE = 'GET_IMAGE',
    IS_FETCHING = 'IS_FETCHING',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_BIG_PHOTO = 'SET_BIG_PHOTO'

let arr = []
let obj = {
    urls: {},
    user: {}
}
for (let i = 0; i < 6; i++) {
    arr.push(obj);
}

const initialState = {
    images: arr,
    isFetching: false,
    currentPage: 1,
    bigPhotoUrl: null
}
const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGE:
            return {
                ...state,
                images: action.imageData
            }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_BIG_PHOTO:
            return {
                ...state,
                bigPhotoUrl: action.photoURL
            }
        default:
            return state
    }
}

//Action creators
export const setImage = (imageData) => ({ type: GET_IMAGE, imageData })
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setBigPhoto = (photoURL) => ({ type: SET_BIG_PHOTO, photoURL })

//Redux-thunk
export const getImage = (currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    unsplashAPI.getPhotoRandom(currentPage).then(data => {
        dispatch(setImage(data))
        dispatch(toggleIsFetching(false))
    })
}
export default imageReducer