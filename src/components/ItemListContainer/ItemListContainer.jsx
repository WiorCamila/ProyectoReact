/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount.jsx"
import "../ItemListContainer/ItemListContainer.css"

const ItemListContainer = ( {titulo} ) =>{
    return (
        <>  
            <div className="title-principal">{titulo}</div>
            <ItemCount stock={10} inicial={0}/>
        </>
    )
}

export default ItemListContainer;