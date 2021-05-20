import React, { Fragment } from 'react'
import Hero from '../components/MainPage/Hero'
import ProductItem from '../components/ProductItem/ProductItem'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ScrollContainer from 'react-indiana-drag-scroll'

const DUMMY_PRODUCTS = {
        "Computers and Accessories":[
            {
                id:1,
                title: 'gaming PC',
                rating: 5,
                img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 3999,
                inStock: true,
                description: 'A fully equiped gaming pc with rgb',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:2,
                title: 'laptop',
                rating: 3,
                img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 1999,
                inStock: false,
                description: 'Apple laptop with m2 chip',
                wishList:true,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:3,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:4,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:5,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:6,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            }
        ],
        "Clothes":[
            {
                id:1,
                title: 'gaming PC',
                rating: 5,
                img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 3999,
                inStock: true,
                description: 'A fully equiped gaming pc with rgb',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:2,
                title: 'laptop',
                rating: 3,
                img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 1999,
                inStock: false,
                description: 'Apple laptop with m2 chip',
                wishList:true,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:3,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:4,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:5,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            },
            {
                id:6,
                title: 'Keyboard',
                rating: 1,
                img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 59,
                inStock: true ,
                description: 'A mechanical keyboard',
                wishList:false,
                orderedDate: new Date(Date.now()).toDateString()
            }
        ]
    }

const MainPage=()=>{
    const mainProducts = Object.keys(DUMMY_PRODUCTS).map(item=>{
        return (
            <div className="mt-10 mb-20">
                <div className="flex flex-col">
                    <div className="font-poppins font-medium text-2xl text-gray-600 flex align-bottom justify-items-start mx-12">{item}</div>
                    <ScrollContainer className="flex flex-col items-center md:flex-row space-x-2 overflow-x-hidden my-3 px-20">
                        {[...DUMMY_PRODUCTS[item]].slice(0,6).map(product=>(
                            <div className="flex flex-col">
                                <ProductItem key={product.id} wishList={product.wishList} id={product.id} title={product.title} rating={product.rating} img={product.img} price={product.price} inStock={product.inStock} description={product.description}/>
                            </div>
                        ))}
                        <div className='p-3 rounded-full flex align-middle justify-items-center bg-gray-100 hover:bg-gray-300 cursor-pointer'>
                            <ArrowForwardIcon/>
                        </div>
                    </ScrollContainer>
                </div>
            </div>
            )
    })
    // let products = DUMMY_PRODUCTS['Computers & Accessories'].slice(0,6).map(item =>(
    // ))
    return(
        <Fragment>
            <Hero/>
            {mainProducts}
        </Fragment>
    )
}
export default MainPage