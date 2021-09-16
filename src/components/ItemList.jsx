import React,{useState,useEffect} from 'react'
import Item from './Item'
import ItemListContainer from './ItemListContainer'
const productos =[
    {
        "name": "Remera 1",
        "size": "1,2",
        "price": 200,
        "img": "https://http2.mlstatic.com/D_NQ_NP_804479-MLA47448482453_092021-O.webp",
        "stock": 0,
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
        "name": "Remera Crepe ",
        "size": "1,2",
        "price": 200,
        "img": "https://http2.mlstatic.com/D_NQ_NP_804479-MLA47448482453_092021-O.webp",
        "stock": 40,
        "available": true,
        "id": "S003",
        "categoria":"summer2021"
    }
 ]

let bd = new Promise((res)=>{
    setTimeout(()=>{
        res(productos)
    },2000)
  })

function ItemList() {
    const [product, setProduct] = useState([])

    const [loading, setloading] = useState(true)
    useEffect(() => {
        bd
        .then(res => setProduct(res))
        .finally(setloading(false))
    }, [])

    
    return (
        <>
        {product.map((productToCard)=> <Item name={productToCard.name} price={productToCard.price} img={productToCard.img} id={productToCard.id} size={productToCard.size} stock={productToCard.stock}></Item> )}
        <ItemListContainer props={loading}></ItemListContainer>
        </>
    )
}

export default ItemList
