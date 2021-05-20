import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarBorderOutlined'
import FavIcon from '@material-ui/icons/Favorite'
import FavOutLineIcon from '@material-ui/icons/FavoriteBorderOutlined'
const ProductItem = (props) =>{
    return(
            <div className="p-4">  
                <div className="rounded-3xl overflow-hidden shadow-lg font-roboto space-y-1 flex-stretch flex-col pb-7 hover:bg-gray-50 transition-colors duration-700 cursor-pointer" style={{width: '320px'}}>
                    <img className="w-full" src={props.img} style={{height: '220px'}} alt=""/>
                    <div className="px-9 py-4 space-y-2 flex flex-col items-start">
                        <div className="font-normal text-xl text-gray-800 capitalize">{props.title}</div>
                        <div className='font-light text-gray-400 text-sm overflow-hidden' style={{flex: '0 1 22px'}}>{props.description}</div>
                    </div>
                    <div className="flex flex-row px-9">
                            {Array(props.rating+(5-props.rating)).fill().map((_,i)=>(i<props.rating)?<StarIcon style={{width: "20px"}}/>:<StarOutlineIcon style={{width: "20px"}}/>)}
                    </div>
                    <div className="px-8">
                        <div className="pt-4 pb-8 mx-2"> 
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-sm text-gray-400 font-normal">{props.inStock?<p>In Stock</p>:<p className='text-red-500'>out of Stock</p>}</span>
                                <span className="text-lg text-gray-500">${props.price}</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                                <button className="bg-black rounded-lg text-white text-xs px-4 py-2 font-roboto font-normal transition-colors duration-700">Add to Cart</button>
                                <div className="text-xs px-2">{props.wishList?<FavIcon className="text-red-600" style={{width: "20px"}}/>:<FavOutLineIcon className="hover:text-red-600" style={{width: "20px"}}/>}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProductItem