/* eslint-disable react/prop-types */
import Item from "../Item/Item";

const ItemList = ({productos}) => {
    return(
        <>
            <div>
                <div>ItemList</div>
                {productos.map((products) => {
                    return <Item key={products.id} products={products} />
            })}
            </div>
        </>
    )
}

export default ItemList;