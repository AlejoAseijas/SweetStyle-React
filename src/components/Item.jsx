import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';

function Item(product) {
    function handlerProduct(x){
        <ItemDetailContainer info='hola'/>
    }
    return (
        <>
                <div className="card">
                <img src={product.img} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h4 className="card-title"> {product.name} </h4>
                    <p className="card-text"> {product.size} </p>
                    <p className="card-text"> {product.price} </p>
                    <button className="btn btn-primary" id='btnProduct' data-id={product.id} onClick={handlerProduct}> Detalle </button>
                    <ItemCount id={product.id} stock={product.stock}></ItemCount>
                </div>
            </div>
                <ItemDetailContainer info='Hola'></ItemDetailContainer>
        </>
    )
}

export default Item
