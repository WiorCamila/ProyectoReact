/* eslint-disable react/prop-types */
const Item = ({products}) =>{
    return( 
        <>
            <div>
                <div>{products.name}</div>
                <div>{products.description}</div>
                <div>{products.precio}</div>
                <img src={products.img} alt="" />
            </div>
        </>
    )
}

export default Item;