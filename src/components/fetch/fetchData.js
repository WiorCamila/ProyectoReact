/* eslint-disable no-unused-vars */
import { productosArrays } from "../Mock/SimulatorData"

export const getProducts = (category) => {
    const filtradoDeProductos = productosArrays.filter((producto) => producto.category.includes(category))
    return new Promise ((resolver, rechazar) =>{
        if(productosArrays.length > 0) {
            setTimeout(() =>{
                resolver(filtradoDeProductos)
            }, 2000)
        }else{
            rechazar("No hay productos disponibles.")
        }
    })
}

export const getCategories = () =>{
    return fetch("https://fakestoreapi.com/products/categories").then((res) => res.json())
}