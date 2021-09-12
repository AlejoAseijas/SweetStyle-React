import React from 'react'
import ItemList  from './ItemList'
import Item from './Item'

function ItemListContainer(loadingState) {
    return (
        <>
        <ItemList></ItemList>
        <h1>Cargando...</h1>
        <Item></Item>
        </>
    )
}

export default ItemListContainer
