import React from 'react';
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';


function Item(product) {
    return (
        <>
                <div className="card">
                <img src={product.img} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h4 className="card-title"> {product.name} </h4>
                    <p className="card-text"> {product.size} </p>
                    <p className="card-text"> {product.price} </p>
                    <Link to={`/item/${product.id}`}> 
                    <button className="btn btn-primary" id='btnProduct' data-id={product.id}> Detalle </button>
                    </Link>
                    <ItemCount id={product.id} stock={product.stock}></ItemCount>
                </div>
            </div>
        </>
    )
}

export default Item
