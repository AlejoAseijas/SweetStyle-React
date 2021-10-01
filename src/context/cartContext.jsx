import React,{createContext, useState, useContext} from "react"
export const cart_context = createContext([])

export const CartContextUse = () =>{
    return useContext(cart_context)
}

export const CartContext =({children})=>{

    const [cart, setCart] = useState([])

    function isInCart(itemId,qty){
       cart.map((element)=>{
           console.log(element);
           if(element.itemId === itemId){
               alert('Producto ya existente en el cart')
           }
           else{
            setCart([...cart,{itemId,qty}])
           }
       })
    }

    function addItem(item,quantily){ 
      isInCart(item,quantily)
    
    }

    /*
     if (item === cart.map((element)=>element.item)) {
            alert('Producto existente')
        }
        else{
           
            
        }
    */ 

    function removeItem(itemId){
        setCart()
    }
    
    function clear(){
        setCart({})
    }
    return(
        <cart_context.Provider value={{addItem,removeItem, clear}}>
            {children}
        </cart_context.Provider>
    )
    
    }
   


