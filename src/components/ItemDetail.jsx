import React from 'react'
import ItemCount from './ItemCount';
import {useParams} from 'react-router-dom'

function ItemDetail(productSelected) {
    //console.log(productSelected.props);
    return (
        <>
           <div className="card">
                <img src={productSelected.props.img} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h4 className="card-title"> {productSelected.props.name} </h4>
                    <p className="card-text"> {productSelected.props.size} </p>
                    <p className="card-text"> {productSelected.props.price} </p>
                    <button className="btn btn-primary" id='btnProduct' data-id={productSelected.props.id}> Detalle </button>
                    <ItemCount id={productSelected.props.id} stock={productSelected.props.stock}></ItemCount>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
