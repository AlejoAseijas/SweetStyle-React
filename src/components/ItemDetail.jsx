import React from 'react'
import ItemCount from "./ItemCount";

import {useCartContext} from '../context/cartContext'

const ItemDetail = ({ prod }) => {
    
    const  {agregarItem} = useCartContext()


    
    const onAdd=(cant)=>{
        agregarItem( prod, cant )
   
    }  


    return (
        <>
            <h2>{prod.name}</h2>
            <h2>{prod.age}</h2>
            <img src={prod.foto} alt="foto"  />

            <ItemCount initial={1} stock={5} onAdd={onAdd} />         
        </>
    )
}

export default ItemDetail
