import * as actionTypes from '../constants/productConstants'


// static product for isolated front end functionality

export const staticProduct = {
    name: "Amazon Alexa #Static",
    description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
}


// https://unsplash.com/photos/kkrXVKK-jhg
// https://imagekkrXVKK-jhg
// static products for isolated front end functionality

let staticProducts = [
    {
        name: "Amazon Alexa #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 50,
        countInStock: 25,
        id: 1,
        imageUrl: 
        "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg"
        // "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
    },
    {
        name: "Audio Technica Headphones #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 233,
        countInStock: 4,
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Cannon EOS-1D #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 1300,
        countInStock: 5,
        id: 3,
        imageUrl: 
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Iphone 12 #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 1099,
        countInStock: 10,
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
    },
    {
        name: "JBL FLIP 4 #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 140,
        countInStock: 10,
        id: 5,
        imageUrl: "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
    },
    {
        name: "PlayStation 5 #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 499,
        countInStock: 15,
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    }
]

const getProductsReducer = (state = { 
    products: 
    []
    // staticProducts
 }, action) => {

    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                // error: action.payload,
                products: staticProducts
            }
        default:
            return state
    }
}

export const getProductDetailsReducer = (state = { 
    product: 
    // {}
    staticProduct 
}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                product: {}
            }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                // error: action.payload
                product: 
                // staticProduct
                {
                    name: "Amazon Alexa #Failed",
                    description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
                    price: 50,
                    countInStock: 25,
                    id: 1,
                    imageUrl: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                }
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: []
            }
        default:
            return state


    }
}

export default getProductsReducer