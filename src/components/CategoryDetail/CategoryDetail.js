import React, {useContext} from 'react'
import {useParams} from 'react-router'
import ProductItem from '../ProductItem/ProductItem'
import {StoreContext} from '../../store/use-context'
const CatergoryDetail =()=>{
    const storeCtx = useContext(StoreContext)
    const params = useParams()
    const category = params.categoryId
    return(
        <div className="flex flex-col p-10 w-screen overflow-x-hidden">
            <div className="flex">
                <h1 className="text-3xl font-poppins">{category}</h1>
            </div>
                <div className="flex flex-row flex-wrap align-middle justify-center mt-8">
                    {storeCtx.items[category].map(item=>(
                        <div key={item.id}>
                            <ProductItem key={item.id} 
                                item={item}
                                id={item.id} 
                                title={item.title} 
                                rating={item.rating} 
                                img={item.img} 
                                price={item.price} 
                                inStock={item.inStock} 
                                description={item.description}/>
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default CatergoryDetail