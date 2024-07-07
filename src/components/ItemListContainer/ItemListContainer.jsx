/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount.jsx"
import "../ItemListContainer/ItemListContainer.css"
//import CartWidget from "../CartWidget/CartWidget.jsx"

const ItemListContainer = ( {titulo} ) =>{
    return (
        <>  
            <div>
                <div className="title-principal">{titulo} </div> 
            </div>
            
            <ItemCount stock={10} inicial={0}/>
        </>
    )
}

export default ItemListContainer;