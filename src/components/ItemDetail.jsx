import React,{useContext} from 'react'
import ItemCount from './ItemCount';

function ItemDetail(productSelected) {



    return (
        <>
           <div className="card">
                <img src={productSelected.props.img} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h4 className="card-title"> {productSelected.props.name} </h4>
                    <p className="card-text"> {productSelected.props.size} </p>
                    <p className="card-text"> {productSelected.props.price} </p>
                    <ItemCount id={productSelected.props.id} stock={productSelected.props.stock}></ItemCount>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
