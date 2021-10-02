import { useContext } from 'react'
import { Link } from "react-router-dom"



const Item = ({product}) => {

    console.log('soy item');

    return (       
            <div key={product.id} className="card w-50 mt-5" >
                    <div className="card-header">
                        {product.title}
                    </div>
                    <div className="card-body">
                        <img src={product.imgaeID} alt="foto" />
                        {product.age}
                       
                    </div>
                    <div className="card-footer">
                        <Link to = {`/detalle/${product.id}`} >
                            <button className="btn btn-outline-primary btn-block">
                                detalle de product
                            </button>
                        </Link>
                    </div>
                    
                </div>
        
    )
}

export default Item
