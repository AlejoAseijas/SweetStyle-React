import { memo } from 'react'
import Item from './Item'

const ItemList = memo( ( {personas} ) => {
    
        console.log('soy itemList');
    
        return (
            <>
                { personas.map(persona=> <Item persona={persona} />     )}  
            </>
        )
    }
)

export default ItemList
