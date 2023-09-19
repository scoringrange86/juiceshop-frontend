import './HomeScreen.css'
import {useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux'

// Components
import Product from '../Components/Product'

// Actions

// getting products pull on product actions page
import {getProducts as listProducts} from '../redux/actions/productActions'


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

const HomeScreen = () => {
    
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts)
    const {products, loading, error} = getProducts
    console.log("Home Screen products ", products)
    console.log("Testing Product", products[3])



    const data =  staticProducts.find(d => d._id === '61454d12efcf036871b3aa9d' )

        console.log( 'data: ', data);

    useEffect( () => {
        dispatch(listProducts())
    } , [dispatch])
    return (
        <div className="homescreen">
           <h2 className="homescreen__title"> Latest Products</h2>
           <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> :
                products.map(product => (
                    <Product 
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    />
                ))                
                }
           </div>
        </div>
    )
}

export default HomeScreen