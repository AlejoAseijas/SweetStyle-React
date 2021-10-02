import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getFirestore } from '../services/getFirebase';
import ItemList from './ItemList';





function ItemListContainer({greeting}) { 

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)

    const { idCategory } = useParams()


    useEffect(() => {

        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp => {
            setProduct( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
        
    }, [idCategory])
        
   const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setProduct([
            ...product,
            { id: "8", name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
        ])
    }



    return (
        <div>             
            <h1> {greeting}</h1> 
         
            <button onClick={handleClick}>Cambiar estado </button> 
                      
            <button onClick={handleAgregar}>Agregar Item </button>
            { loading ? <h2>Cargando...</h2> :   <ItemList personas={product} /> }              
          
        </div>
    )
}

export default ItemListContainer
