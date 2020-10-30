import * as axios from 'axios'


const API_KEY = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
const instance = axios.create({
    baseURL: `https://api.unsplash.com/photos/`
})


export const unsplashAPI = {
    getPhotoRandom(currentPage) {
        return instance.get(`?client_id=${API_KEY}&per_page=zz&page=${currentPage}`)
            .then(responses => responses.data)
    },
}

