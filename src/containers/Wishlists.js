import React, { useContext } from 'react'
import WishListItem from '../components/ProductItem/ProductItem'
import {StoreContext} from '../store/use-context'

const WishLists=()=>{
    const storeCtx = useContext(StoreContext)
    return(
        <div className="flex flex-col mx-20">
            <div className="p-10 font-poppins text-2xl font-bold">Favorites</div>
            <div className="flex flex-row flex-wrap justify-center">
                {storeCtx.wishList.length!==0?
                storeCtx.wishList.map(item=>{
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
                }):
                <div className="mt-14 font-lg font-roboto text-red-600">No Favorites Found</div>}
            </div>
        </div>
    )
}

export default WishLists