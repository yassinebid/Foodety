import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions';
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>
        {loading && (<Loading/>)}
                {success && (<Success success='Your Order Placed Succcessfully'/>)}
                {error && (<Error error='Somting Went Wrong'/>)}
            <StripeCheckout
                amount={subtotal * 100}
                 
                token={tokenHander}
                stripeKey='pk_test_51MRp0nJ6Ke3z0YgROjJZqYjOBAB1nu9rqt4WgcT9Wc0TzrMVHCqgy8izjLY7tkktALuogzi1fMMWAHmH4N8s8AnF00d2a6SI0c'
                currency='USD'>
                <button className='btn'> Pay now</button>
            </StripeCheckout>
        </div>
    )
}
