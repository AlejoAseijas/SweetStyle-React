import React,{createContext, useState} from "react"
export const cart_context = createContext([])

export const CartContext =({children})=>{

    const [productClick, setProductClick] = useState({})

    function addItem(item,quantily){ 
        item !== productClick.map(elemt=> elemt.item) 
        ? 
        setProductClick({product:item, Quantily: quantily})
        :
        console.log('error');
    }

    function removeItem(itemId){
        setProductClick()
    }
    
    function clear(){
        setProductClick({})
    }
   
    return(
        <cart_context.Provider value={{addItem,removeItem, clear}}>
            {children}
        </cart_context.Provider>
    )
    
    }
   


