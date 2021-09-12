import React from 'react'
import ItemList from './ItemList';


function Item(props) {
    return (
        <>
        <div className="card">
            <img src={props.img} className="card-img-top" alt=''/>
            <div className="card-body">
                <h4 className="card-title"> {props.name} </h4>
                <p className="card-text"> sw </p>
                <p className="card-text"> {props.price} </p>
                <button className="btn btn-primary" id='btnProduct' data-id={props.id}> Comprar </button>
            </div>
        </div>
        </>
    )
}

export default Item
