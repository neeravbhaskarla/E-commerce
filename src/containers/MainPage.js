import React, { Fragment, useContext , useReducer} from 'react'
import Hero from '../components/MainPage/Hero'
import ProductItem from '../components/ProductItem/ProductItem'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ScrollContainer from 'react-indiana-drag-scroll'
import {StoreContext} from '../store/use-context'
const MainPage=()=>{
    const storeCtx = useContext(StoreContext)
    const mainProducts = Object.keys(storeCtx.items).map(item=>{
        return (
            <div className="mt-10 mb-20" key={item}>
                <div className="flex flex-col">
                    <div className="font-poppins font-medium text-2xl text-gray-600 flex align-bottom justify-items-start mx-12">{item}</div>
                    <ScrollContainer className="flex flex-col items-center md:flex-row space-x-2 overflow-x-hidden my-3 px-20">
                        {[...storeCtx.items[item]].slice(0,6).map(product=>(
                            <div className="flex flex-col" key={product.id}>
                                <ProductItem key={product.id} 
                                    item={product}
                                    id={product.id} 
                                    title={product.title} 
                                    rating={product.rating} 
                                    img={product.img} 
                                    price={product.price} 
                                    inStock={product.inStock} 
                                    description={product.description}/>
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
    return(
        <Fragment>
            <Hero/>
            {mainProducts}
        </Fragment>
    )
}
export default MainPage