import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

let staticProducts = [
    {
        name: "Amazon Alexa #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 50,
        countInStock: 25,
        _id: '61454d12efcf036871b3aa9b',
        imageUrl: 
        "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg"
        // "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
    },
    {
        name: "Audio Technica Headphones #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 233,
        countInStock: 4,
        _id: '61454d12efcf036871b3aa9c',
        imageUrl: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Cannon EOS-1D #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 1300,
        countInStock: 5,
        _id: '61454d12efcf036871b3aa9a',
        imageUrl: 
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Iphone 12 #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 1099,
        countInStock: 10,
        _id: '61454d12efcf036871b3aa99',
        imageUrl: "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
    },
    {
        name: "JBL FLIP 4 #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 140,
        countInStock: 10,
        _id: '61454d12efcf036871b3aa9d',
        imageUrl: "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
    },
    {
        name: "PlayStation 5 #Static",
        description: "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
        price: 499,
        countInStock: 15,
        _id: '61454d12efcf036871b3aa98',
        imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    }
]
export const getProducts = () => async (dispatch) => {

    try{
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST})

        //const {data} = await axios.get("/api/products")

        dispatch ({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: 
            // console.log("products recieved",data) &&
            //data
            staticProducts
        })
    }
    catch(error){
        dispatch ({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: 
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
            
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {

    try{
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        // const {data} = await axios.get(`/api/products/${id}`)

        const data =  staticProducts.find(d => d._id === id )

        console.log('id: ', id, 'data: ', data);
           

        dispatch ({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch ({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        })
    }
}

export const removeProductDetails = () => (dispatch) => {

    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    })
}