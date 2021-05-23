import React, { useContext,useEffect } from 'react'
import OrderItem from '../components/OrderItem/OrderItem'
import {StoreContext} from '../store/use-context'
const Orders = () =>{
    const storeCtx = useContext(StoreContext)
    // storeCtx.fetchOrders()
    return(
        <ul className="p-5 space-y-5 overflow-y-visible flex flex-col max-w-4xl ml-20">
            {storeCtx.orders.map(ele=>(
                ele.items.map(item=>(
                    <div>
                        <hr className="m-2 bg-gray-200" style={{padding: '0.5px'}}/>
                        <OrderItem key={item.id} title={item.title} img={item.img} price={item.price} description={item.description} orderedDate={item.orderedDate}/>
                        <hr className="m-1 bg-gray-200" style={{padding: '0.5px'}}/>
                    </div>
                ))
            ))}
        </ul>
    )
}
export default Orders