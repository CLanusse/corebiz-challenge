import axios from 'axios'

const PRODUCTS_URL = 'https://corebiz-test.herokuapp.com/api/v1/products'
const NEWSLETTER_URL = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get(PRODUCTS_URL)
            .then( ({data}) => {
                resolve(data)
            })
            .catch( err => {
                reject(err)
            })
    })
}

export const postSusbscription = ({name, email}) => {
    return new Promise((resolve, reject) => {
        axios.post(NEWSLETTER_URL, {
            name,
            email
        })
        .then( ({data}) => {
            resolve(data)
        })
        .catch( err => {
            reject(err)
        })
    })
}