import React, { useContext } from 'react'
import {useParams} from 'react-router'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarBorderOutlined'
import FavIcon from '@material-ui/icons/Favorite'
import FavOutLineIcon from '@material-ui/icons/FavoriteBorderOutlined'
import {StoreContext} from '../../store/use-context'
const ProductDetail = ()=>{
    const storeCtx = useContext(StoreContext)
    const params = useParams()
    const [catergory, index] = params.productId.split('_')
    let product = storeCtx.items[catergory][index-1]
    const onAddToCart =(item)=>{
        storeCtx.addToCart(item)
    }
    const onRemoveWishList=(id)=>{
        storeCtx.removeFromWishList(id)
    }
    const onRemoveCartList=(id)=>{
        storeCtx.removeFromCart(id)
    }
    const onAddWishlist=(item)=>{
        storeCtx.addToWishList(item)
    }
    return(
        <div className="flex flex-row font-roboto font-light">
            <div className="felx flex-col px-10 py-20 ml-10 space-y-14" style={{width: '60vw', height:'70vh'}}>
                <div className="capitalize text-left text-4xl font-thin font-poppins">
                    {product.title}
                </div>
                <div className="text-sm font-light text-gray-500 text-left ml-2">
                    {product.description}
                </div>
                <div className="text-md font-bold text-gray-800 text-left ml-2">
                    {product.inStock?<span>In Stock</span>:<span className="text-red-500">Out of Stock</span>}
                </div>
                <div className="flex flex-row justify-start ml-10">
                            {Array(product.rating+(5-product.rating)).fill().map((_,i)=>(i<product.rating)?<StarIcon key={i} style={{width: "30px"}} className="ml-1"/>:<StarOutlineIcon key={i} style={{width: "20px"}} className="ml-1"/>)}
                </div>  
                <div className="font-bold text-right mr-24 text-lg">
                    Price: <span className="font-light ml-1">${product.price}</span>
                </div>
                <div className="flex flex-row justify-between items-center px-4">
                                <div className="flex items-start">
                                    {storeCtx.cart.find(item=>item.id===product.id)?<Button clicked={()=>onRemoveCartList(product.id)}>REMOVE FROM CART</Button>:<Button clicked={()=>onAddToCart(product)}>ADD TO CART</Button>}
                                </div>
                                <div className="text-xs mr-16 cursor-pointer">
                                    {storeCtx.wishList.find(item=>item.id===product.id)?
                                        <FavIcon className="text-red-600" style={{width: "50px"}} 
                                            onClick={()=>onRemoveWishList(product.id)}/>
                                        :<FavOutLineIcon className="hover:text-red-600" style={{width: "50px"}} 
                                            onClick={()=>onAddWishlist(product)}/>}</div>
                        </div>
            </div>
            <div>
                <img src={product.img} className="" alt="" style={{width: '50vw', height:'70vh'}}/>
            </div>
        </div>
    )
    
}
const Button =(props) =>{
    return <button className="text-sm bg-black hover:bg-gray-400 text-white  px-6 py-2 -ml-3 font-roboto font-normal transition-colors duration-500" onClick={props.clicked}>{props.children}</button>
}

export default ProductDetail