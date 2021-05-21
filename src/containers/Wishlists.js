import React, { useContext } from 'react'
import WishListItem from '../components/ProductItem/ProductItem'
import {StoreContext} from '../store/use-context'

const WishLists=()=>{
    const storeCtx = useContext(StoreContext)
    let products= storeCtx.wishList.map(item=>{
        return <WishListItem key={item.id}
                item={item}
                wishList={item.wishList} 
                id={item.id} 
                title={item.title} 
                rating={item.rating} 
                img={item.img} 
                price={item.price} 
                inStock={item.inStock} 
                description={item.description}/>
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