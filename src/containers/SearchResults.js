import React, { useContext } from 'react'
import {useParams} from 'react-router'
import {StoreContext} from '../store/use-context'
import ProductItem from '../components/ProductItem/ProductItem'

const SearchResults = () =>{
    const params = useParams()
    const storeCtx = useContext(StoreContext)
    const mainProducts = Object.keys(storeCtx.items).map(item=>(
        [...storeCtx.items[item]].map(product=>{
            if(product.title.toLowerCase().includes(params.searchKey) || product.description.toLowerCase().includes(params.searchKey)){
                return(
                    <ProductItem key={product.id} 
                        item={product}
                        id={product.id} 
                        title={product.title} 
                        rating={product.rating} 
                        img={product.img} 
                        price={product.price} 
                        inStock={product.inStock} 
                        description={product.description}/>)
            }
        })
    ))

    return(
        <div>
            <div className="flex flex-row flex-wrap justify-center overflow-x-hidden">
                {Object.keys(mainProducts).length===0 && mainProducts?<p>no Search Results</p>:mainProducts}    
            </div>
        </div>
    )
}
export default SearchResults