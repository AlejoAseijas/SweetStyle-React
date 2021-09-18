/* eslint-disable no-useless-concat */
import React,{useState,useEffect,} from 'react'
import { useParams } from 'react-router'
import Item from './Item'
import ItemListContainer from './ItemListContainer'

const productos = [
    {
        "name": "Summer 1",
        "size": "1,2",
        "price": 200,
        "img": "https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/remera-hombre-new-balance-essentials-normal-tee-mt83541cmm_40.jpg",
        "stock": 0,
        "available": true,
        "id": "S001",
        "categoria":"summer2021"
    },
    {
        "name": "Summer 2",
        "size": "1,2",
        "price": 500,
        "img": "https://d368r8jqz0fwvm.cloudfront.net/26572-product_lg/remera-de-hombre-rider.jpg",
        "stock": 10,
        "available": true,
        "id": "S002",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": 200,
        "img": "https://http2.mlstatic.com/D_NQ_NP_877114-MLA31355994256_072019-O.jpg",
        "stock": 4,
        "available": true,
        "id": "S003",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": 100,
        "img": "https://static.dafiti.com.ar/p/eyelit-0452-98742-1-product.jpg",
        "stock": 4,
        "available": true,
        "id": "S004",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": 250,
        "img": "data:image/jpeg;base64,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",
        "stock": 4,
        "available": true,
        "id": "S005",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price":700,
        "img": "https://drifters.com.ar/uploads/product_image/20685/650w_AR-1GGGBLK-001-aa.jpg",
        "stock": 4,
        "available": true,
        "id": "S006",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": "",
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/342/641/products/recurso-611-4eefe9cf7a0dfafbab15798994261377-1024-1024.png",
        "stock": 4,
        "available": true,
        "id": "S007",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": "",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeq5n16vgR-qPGe_DeWaeTnp4joCGHmas4WQ&usqp=CAU",
        "stock": 4,
        "available": true,
        "id": "S008",
        "categoria":"summer2021"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": "",
        "img": "https://i.pinimg.com/originals/7b/41/3c/7b413c4a3df4ba142b2698b1e05cf6fb.jpg",
        "stock": 4,
        "available": true,
        "id": "S009",
        "categoria":"remeras"
    },
    {
        "name": "Remera Crepe Rayada",
        "size": "1,2",
        "price": "",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU81B-8OYFtKO-QyHcpYgiyf6k5Ov9se6gQA&usqp=CAU",
        "stock": 4,
        "available": true,
        "id": "S010",
        "categoria":"pantalones"
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
    const {idCategory} = useParams()


    useEffect(() => {
        if (idCategory) {
            bd
            .then(res => {
                setProduct(res.filter(prod=>prod.categoria === idCategory))
            })
            .catch(error => console.log(error))
            .finally(setloading(false))
        }
        else{
            bd
        .then(res => {
            setProduct(res)
        })
        .catch(error => console.log(error))
        .finally(setloading(false))
        }
        
    }, [idCategory])

    return (
        <>
        {product.map((productToCard)=> productToCard.stock > 0 ? <Item name={productToCard.name} price={productToCard.price} img={productToCard.img} id={productToCard.id} size={productToCard.size} stock={productToCard.stock}></Item> : console.log('FALTANTE DE PRODUCTO:'+'    '+productToCard.id) )}
        <ItemListContainer props={loading}></ItemListContainer>
        </>
    )
}

export default ItemList
