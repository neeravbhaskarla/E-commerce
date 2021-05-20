import React, { Fragment } from 'react'
import OrderItem from '../components/OrderItem/OrderItem'
const DUMMY_PRODUCTS = [
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
        description: 'Apple laptop with m2',
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
    }
]
const Orders = () =>{
    return(
        <ul className="p-5 space-y-5 overflow-y-visible flex flex-col max-w-4xl ml-20">
            {DUMMY_PRODUCTS.map(item=>(
                <div>
                    <hr className="m-2 bg-gray-200" style={{padding: '0.5px'}}/>
                    <OrderItem key={item.id} title={item.title} img={item.img} price={item.price} description={item.description} orderedDate={item.orderedDate}/>
                    <hr className="m-1 bg-gray-200" style={{padding: '0.5px'}}/>
                </div>
            ))}
        </ul>
    )
}
export default Orders