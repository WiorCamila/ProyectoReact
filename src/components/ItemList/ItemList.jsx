/* eslint-disable react/prop-types */
import Item from "../Item/Item";
import "../ItemList/ItemList.css"

const ItemList = ({productos}) => {
    return(
        <>
            <div className='card-itemList'>
                {productos.map((products) => {
                    return <Item key={products.id} products={products} />
            })}
            </div>
        </>
    )
}

export default ItemList;