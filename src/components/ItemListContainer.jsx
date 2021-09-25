import React,{useEffect} from 'react'
import Item from './Item'
function ItemListContainer(loadingState) {
    return (
        <>
         {useEffect(() => {
       loadingState.props ?
       <h1>Cargando...</h1>
       :
     <Item> </Item> 
    }, [loadingState])}  
        </>
    )
}


export default ItemListContainer
