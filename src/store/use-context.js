import React,{useCallback, useEffect, useState} from 'react'
// const DUMMY_PRODUCTS = {
//     "Computers and Accessories":[
//         {
//             id:'Computers and Accessories_1',
//             title: 'gaming PC',
//             rating: 5,
//             img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 3999,
//             inStock: true,
//             description: 'A fully equiped gaming pc with rgb',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Computers and Accessories_2',
//             title: 'laptop',
//             rating: 4,
//             img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 1999,
//             inStock: false,
//             description: 'Apple laptop with m2 chip',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Computers and Accessories_3',
//             title: 'Mouse',
//             rating: 4,
//             img: 'https://images.unsplash.com/photo-1613141411244-0e4ac259d217?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwbW91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
//             price: 59,
//             inStock: true ,
//             description: 'A RBG mouse',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Computers and Accessories_4',
//             title: 'Graphics Card',
//             rating: 5,
//             img: 'https://wallpapercave.com/wp/wp2313430.jpg',
//             price: 199,
//             inStock: true ,
//             description: 'A GTX 980 graphics card',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Computers and Accessories_5',
//             title: 'Graphics card',
//             rating: 2,
//             img: 'https://wallpapercave.com/wp/wp8131528.jpg',
//             price: 799,
//             inStock: false ,
//             description: 'RTX 3090 graphics card',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Computers and Accessories_6',
//             title: 'Headphones',
//             rating: 5,
//             img: 'https://wallpapercave.com/wp/wp3333841.jpg',
//             price: 99,
//             inStock: true ,
//             description: 'A Beats headphone',
//             orderedDate: new Date(Date.now()).toDateString()
//         }
//     ],
//     "Mobiles":[
//         {
//             id:'Clothes_1',
//             title: 'gaming PC',
//             rating: 5,
//             img: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 3999,
//             inStock: true,
//             description: 'A fully equiped gaming pc with rgb',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Clothes_2',
//             title: 'laptop',
//             rating: 3,
//             img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 1999,
//             inStock: false,
//             description: 'Apple laptop with m2 chip',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Clothes_3',
//             title: 'Keyboard',
//             rating: 1,
//             img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 59,
//             inStock: true ,
//             description: 'A mechanical keyboard',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Clothes_4',
//             title: 'Keyboard',
//             rating: 1,
//             img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 59,
//             inStock: true ,
//             description: 'A mechanical keyboard',
//             orderedDate: new Date(Date.now()).toDateString()
//         },
//         {
//             id:'Clothes_5',
//             title: 'Keyboard',
//             rating: 1,
//             img: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             price: 59,
//             inStock: true ,
//             description: 'A mechanical keyboard',
//             orderedDate: new Date(Date.now()).toDateString()
//         }
//     ]
// }
export const StoreContext = React.createContext({
    items:{},
    cart:[],
    wishList:[],
    addToCart: (item)=>{},
    removeFromCart: (id)=>{},
    addToWishList: (item)=>{},
    removeFromWishList: (id)=>{},
    setItems: (item)=>{}
})

export const StoreContextProvider = (props)=>{
    
    const [items, setItemsState] = useState({})
    const [cart, setCartState] = useState([])
    const [wishList, setWishListState] = useState([])

    // const onAddHandler =()=>{
    //     const getData = async()=>{
    //         await fetch('https://e-commerce-597b0-default-rtdb.firebaseio.com/store.json',{
    //             method:'PUT',
    //             headers:{
    //                 "Content-Type":'application/json'
    //             },
    //             body: JSON.stringify(DUMMY_PRODUCTS)
    //         })
    //       }
    //     getData()
    // }
    const addToCartHandler =(item)=>{
        // onAddHandler()
        let dupCart = cart
        dupCart=dupCart.concat(item)
        setCartState(dupCart)
    }

    const removeFromCartHandler=(id)=>{
        let dupCart = cart
        dupCart = dupCart.filter(item=>item.id!==id)
        setCartState(dupCart)
    }

    const addToWishListHandler = (item) =>{
        let dupWishList = wishList
        dupWishList=dupWishList.concat(item)
        setWishListState(dupWishList)
    }

    const removeFromWishListHandler=(id)=>{
        let dupWishList = wishList
        dupWishList = dupWishList.filter(item=>item.id!==id)
        setWishListState(dupWishList)
    }

    const onItemsSetHandler = (items) =>{
        setItemsState(items)
    }

    const contextValue ={
        items: items,
        cart: cart,
        wishList: wishList,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler,
        addToWishList: addToWishListHandler,
        removeFromWishList: removeFromWishListHandler,
        setItems: onItemsSetHandler
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}