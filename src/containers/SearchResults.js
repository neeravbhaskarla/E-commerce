import React, { useContext } from 'react'
import {useParams} from 'react-router'
import {StoreContext} from '../store/use-context'
import ProductItem from '../components/ProductItem/ProductItem'

const SearchResults = () =>{
    const params = useParams()
    const storeCtx = useContext(StoreContext)
    let mainProducts = []
    Object.keys(storeCtx.items).map(item=>(
        [...storeCtx.items[item]].map(product=>{
            if(product.title.toLowerCase().split(/\s+/).includes(params.searchKey) || product.keywords.toLowerCase().split(/\s+/).includes(params.searchKey)){
                mainProducts.push(
                    <ProductItem key={product.id} 
                        item={product}
                        id={product.id} 
                        title={product.title} 
                        rating={product.rating} 
                        img={product.img} 
                        price={product.price} 
                        inStock={product.inStock} 
                        description={product.description}/>
                )
            }
            return null
        })
    ))
    return(
        <div>
            <div className="flex flex-row flex-wrap justify-center overflow-x-hidden">
                {mainProducts.length===0?<h3 className="mt-10">Search results not found</h3>:mainProducts}    
            </div>
        </div>
    )
}
export default SearchResults