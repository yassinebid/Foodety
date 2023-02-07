import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Pizza from '../components/Pizza'

export default function Homescreen() {

  const dispatch = useDispatch()
  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div> {
      <div className="row justify-content-center">
        {loading ? (<Loading />) : error ? (<Error error="Somthing went worng"/>) : (
          pizzas.map((pizza) => {
            return (<div className="col-md-3 m-3" key={pizza._id}>
              <div>
                <Pizza pizza={pizza}/>
              </div>
            </div>
            );
          })
        )}
      </div>
    }
    </div>
  )
}

