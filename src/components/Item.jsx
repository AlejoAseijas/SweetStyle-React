import React from 'react'

function Item() {
    return (
        <div className='card-header'>
        <h2> {prod.name} </h2>
    </div>
    <div className='card-body'>
        <img src={prod.img} alt=''/>
        <h3>{prod.price}</h3>
        </div>
        <div className='card-footer'>
            <button className='btn btn-outline-primary btn-block'> Agregar </button>
        </div>
    )
}

export default Item
