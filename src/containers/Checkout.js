import React, { Fragment } from 'react'
import CloseIcon from '@material-ui/icons/Close'
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
    }
]
const Checkout = () =>{
    const totalPrice = DUMMY_PRODUCTS.map(item=>item.price).reduce((sum,total)=>sum+total)
    return (
        <Fragment>
            <h1 className="text-2xl font-poppins mt-10 mb-14 text-center font-semibold">Shopping Cart</h1>
            <div className="flex flex-row justify-between mx-20">
                <div className="flex flex-col space-y-5" style={{width: '50vw'}}>
                    {DUMMY_PRODUCTS.map(item=>(
                        <Order key={item.id} title={item.title} description={item.description} img={item.img} price={item.price}/>
                    ))}
                </div>
                <div className="flex flex-col p-10 space-y-8 font-roboto" style={{border: '1px solid #ccc', height: '400px'}}>
                        <h1 className="flex items-start font-semibold text-lg">ORDER OVERVIEW</h1>
                        <div className="flex flex-col align-middle space-y-2 text-base text-gray-600">
                            <div className="flex flex-row justify-between align-middle items-center">
                                <span className="text-sm font-sans text-gray-600 font-bold">Subtotal</span>
                                <span className="text-gray-500">${totalPrice}</span>
                            </div>
                            <div className="flex flex-row justify-between align-middle items-center">
                                <span className="text-sm font-sans text-gray-600 font-bold">Delivery</span>
                                <span className="text-gray-500">$10</span>
                            </div>
                            <div className="flex flex-row justify-between align-middle items-center">
                                <span className="text-sm font-sans text-gray-600 font-bold">The estimated delivery time</span>  
                                <span className="text-gray-600 font-semibold">2-3 days</span>
                            </div>
                            <div className="flex flex-row justify-between align-middle items-center">
                                <span className="text-sm font-sans text-gray-600 font-bold">Subtotal</span>
                                <span className="text-gray-500">${totalPrice+10}</span>
                            </div>
                        </div>
                        <div>
                            <button className="bg-black text-white px-32 py-3 mt-12">Order</button>
                        </div>
                </div>
            </div>

        </Fragment>
    )
}
const Order=(props)=>{
    return(
        <article className="flex flex-row space-x-6 overflow-hidden hover:bg-gray-100 transition-colors duration-700" style={{border : '1px solid #ccd'}}>
            <div>
                <img src={props.img} alt="" style={{height: '150px', width: '250px'}}/>
            </div>
            <div className="flex flex-col w-full px-1 py-2">
                <div className="flex flex-row justify-between">
                    <div className="font-roboto text-lg font-medium text-black mb-0.5 capitalize">{props.title}</div>
                </div>
                <div className="flex flex-row justify-items-end align-bottom mt-2">
                        <div className="font-roboto text-sm text-gray-400 font-normal">{props.description}</div>
                </div>
            </div>  
            <div className="flex flex-col justify-between p-2">
                <div className="font-roboto text-xl text-gray-500 flex justify-end p-2">${props.price}</div>
                <button className="flex flex-row items-center align-middle font-poppins p-2 text-xs font-normal text-gray-900"><CloseIcon style={{height: '15px', width: '15px'}}/> Remove</button>
            </div>
        </article>
    )
}
export default Checkout