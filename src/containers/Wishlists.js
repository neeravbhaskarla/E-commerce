import React from 'react'
import WishListItem from '../components/ProductItem/ProductItem'

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

const WishLists=()=>{
    let products= Object.keys(DUMMY_PRODUCTS).map(item=>{
        return[...DUMMY_PRODUCTS[item]].map((ele)=>{
            if(ele.wishList)
            {
                return <WishListItem key={ele.id} wishList={ele.wishList} id={ele.id} title={ele.title} rating={ele.rating} img={ele.img} price={ele.price} inStock={ele.inStock} description={ele.description}/>
            }
        })
    })
    return(
        <div className="flex flex-col mx-20">
            <div className="p-10 font-poppins text-2xl font-bold">Favorates</div>
            <div className="flex flex-row">
                {products}
            </div>
        </div>
    )
}

export default WishLists