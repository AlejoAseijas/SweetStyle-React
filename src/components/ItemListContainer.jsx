import React,{useEffect,useState} from 'react'
const productos =[
    {
        "name": "Remera 1",
        "size": "1,2",
        "price": 200,
        "img": "https://http2.mlstatic.com/D_NQ_NP_804479-MLA47448482453_092021-O.webp",
        "stock": 4,
        "available": true,
        "id": "S001",
        "categoria":"summer2021"
    },
    {
        "name": "Remera 2",
        "size": "1,2",
        "price": 500,
        "img": "https://http2.mlstatic.com/D_NQ_NP_804479-MLA47448482453_092021-O.webp",
        "stock": 4,
        "available": true,
        "id": "S002",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": 200,
        "img": "https://http2.mlstatic.com/D_NQ_NP_804479-MLA47448482453_092021-O.webp",
        "stock": 4,
        "available": true,
        "id": "S003",
        "categoria":"summer2021"
    }
 ]
 

let tarea = new Promise((res)=>{
  setTimeout(()=>{
      res(productos)
  },2000)
})

function ItemListContainer () {
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        tarea
        .then(res => setProduct(res))
        .finally(setloading(false))
    }, [])
    
    
    return (
        <>
            <p>Remeras</p>
            {loading ? 
            <h2>Cargando...</h2>
                :
      
                product.map(prod=><div key={prod.id} className='card w-50 mt-5'> 
            
            </div>)}
        </>
    )
}

export default ItemListContainer 
