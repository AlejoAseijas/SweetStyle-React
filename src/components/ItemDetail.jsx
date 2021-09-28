import React,{useContext} from 'react'
import ItemCount from './ItemCount';
import { cart_context } from '../context/cartContext';

function ItemDetail(productSelected) {
    const context = useContext(cart_context)
   
    
    function handlerClick(productInfo){
        context.addItem({id: productInfo.id, quantily:productInfo.quantily})
        console.log(context);
    }

    return (
        <>
           <div className="card">
                <img src={productSelected.props.img} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h4 className="card-title"> {productSelected.props.name} </h4>
                    <p className="card-text"> {productSelected.props.size} </p>
                    <p className="card-text"> {productSelected.props.price} </p>
                    <button className="btn btn-primary" id='btnProduct' data-id={productSelected.props.id} data-quantily={'4'} onClick={handlerClick}> Añadir al carro </button>
                    <ItemCount id={productSelected.props.id} stock={productSelected.props.stock}></ItemCount>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
