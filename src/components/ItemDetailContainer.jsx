import React,{useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'

const productos = 
    {
        "name": "Summer 1",
        "size": "1,2",
        "price": 200,
        "img": "https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/remera-hombre-new-balance-essentials-normal-tee-mt83541cmm_40.jpg",
        "stock": 0,
        "available": true,
        "id": "S001",
        "categoria":"summer2021"
    }
 

 let bd = new Promise((res)=>{
    setTimeout(()=>{
        res(productos)
    },2000)
  })

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        bd
        .then(res => {
            setProduct(res)
        })
        .catch(error => console.log(error))
    }, [])
    return (
        <>
          <ItemDetail props={product}> </ItemDetail>   
        </>
    )
}

export default ItemDetailContainer
