import React,{createContext, useState, useContext} from "react"
export const cart_context = createContext([])

export const CartContextUse = () =>{
    return useContext(cart_context)
}

export const CartContext =({children})=>{

    const [cart, setCart] = useState([])

    function addItem(item,quantily){ 
        if(isInCart(item)){
            alert('El producto ya esta en el carrito')
        }else{
            setCart([...cart,{item,quantily}])
        }
    }

    function removeItem(itemId){
        setCart()
    }
    
    function clear(){
        setCart({})
    }
   console.log('carrito',cart);

   function isInCart(id){
     
    cart.find(element => element.item === id)
  }

    return(
        <cart_context.Provider value={{addItem,removeItem, clear}}>
            {children}
        </cart_context.Provider>
    )
    
    }
   


