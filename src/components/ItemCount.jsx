import React,{useState} from 'react'
import {CartContextUse} from '../context/cartContext'

function ItemCount(productToCart) {
    const {addItem} = CartContextUse();
    const [count, setCount] = useState(0)
 

    function handlerClick(productInfo){
        addItem(productToCart.id, count)
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
        <div> <button className="btn btn-primary" id='btnProduct'  onClick={handlerClick}> Añadir al carro </button> </div>
    </div>
    )
}

export default ItemCount

