import React,{useEffect, useState} from 'react'
import {CartContextUse} from '../context/cartContext'
import {Link} from 'react-router-dom'
let buttonState = 'Añadir al carrito'

function ItemCount(productToCart) {
    const {addItem} = CartContextUse();
    const [count, setCount] = useState(0)
 

    function handlerClick(productInfo){
        addItem(productToCart.id, count)
        buttonState=  <Link to={ `/cart`}> Terminar Compra </Link>
    }

    function onAdd(e){

        if(e.target.id==='add'){
          if(count<productToCart.stock){
              setCount(count+1)
          }
        }
        if(e.target.id==='less'){
            if(count > 0) setCount(count-1)
        }
    }

    return (
        <div id='controlsOfAmount'>
        <button type="button" class="btn btn-primary"  id='add' onClick={onAdd} data-id={productToCart.id}>+</button>
        <p for="formGroupExampleInput" class="form-label">{count}</p>
        <button type="button" class="btn btn-primary" id='less' onClick={onAdd}>-</button>
        <div> <button className="btn btn-primary" id='btnProduct'  onClick={handlerClick}> {buttonState} </button> </div>
    </div>
    )
}

export default ItemCount

