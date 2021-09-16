import React,{useState} from 'react'

function ItemCount(props) {
    
    function onAdd(e){

        if(e.target.id==='add'){
          if(props.stock>0 && count<props.stock){
              setCount(count+1)
          }
          if(props.stock===0){
              alert('No hay stock');
          }
        }
        if(e.target.id==='less'){
            if(count > 0) setCount(count-1)
        }
    }

    const [count, setCount] = useState(0)
    
    return (
        <div id='controlsOfAmount'>
        <button type="button" class="btn btn-primary"  id='add' onClick={onAdd} data-id={props.id}>+</button>
        <p for="formGroupExampleInput" class="form-label">{count}</p>
        <button type="button" class="btn btn-primary" id='less' onClick={onAdd}>-</button>
    </div>
    )
}

export default ItemCount
