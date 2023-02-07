import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {

        dispatch(getUserOrders())
    }, [])

    return (
        <div>
            <h2 style={{ frontSize: '40px' }}>Orders</h2>
            <div className='row justify-content-center'>
                {loading && (<Loading />)}
                {error && (<Error error='Somthing Went Wrong' />)}
                {orders && orders.map(order => {
                    return <div className='col-md-8'>
                        <div className='flex-container'>
                        <h2 style={{fontSize:'25px'}}>Items</h2>
                            <div>{order.orderItems.map(item => {
                                return <div>
                                    <h1>{item.name} [{item.varient}] * {item.quantity} = {item.price}</h1>
                                </div>
                            })}
                            </div>
                            <div>
                            <h2 style={{fontSize:'25px'}}>Address</h2>
                            <h1> Street : {order.shippingAddress.street }</h1>
                            <h1> City : {order.shippingAddress.city }</h1>
                            <h1> Country : {order.shippingAddress.country }</h1>
                            <h1> Pincode : {order.shippingAddress.pincode }</h1>
                            </div>
                            <div>
                            <h2 style={{fontSize:'25px'}}>Order Info</h2>
                            <h1> Order Amount : {order.orderAmount}</h1>
                            <h1> Date : {order.createdAt.substring(0,10)}</h1>
                            <h1> Transaction Id : {order.transactionId}</h1>
                            <h1> Order : {order._id}</h1>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
