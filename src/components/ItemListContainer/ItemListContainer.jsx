/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount.jsx"


const ItemListContainer = ( {titulo} ) =>{
    return (
        <>  
            <div>{titulo}</div>
            <ItemCount stock={10} inicial={0}/>
        </>
    )
}

export default ItemListContainer;