import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetchUno } from '../Ultil/getMock'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [prod, setProd] = useState()
    const { idProducto } = useParams()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            getFetchUno
            .then(resp =>  setProd(resp))
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))            
        }, 3000);

    }, [])

    console.log(idProducto)
    
    return (
        <>

            { loading ? <h2>Cargando...</h2> : <ItemDetail  prod={prod} />  }
           
        </>
    )
}

export default ItemDetailContainer
