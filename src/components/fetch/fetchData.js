/* eslint-disable no-unused-vars */
import { productosArrays } from "../Mock/SimulatorData"

export const getProducts = (category) => {

    let filtrarCategorias = [...productosArrays]
    if (category) {
        filtrarCategorias = productosArrays.filter((productos) => 
            productos.category.includes(category)
        )
    }

    return new Promise ((resolver, rechazar) =>{
        if(productosArrays.length > 0) {
            setTimeout(() =>{
                resolver(filtrarCategorias)
            }, 2000)
        }else{
            rechazar("No hay productos disponibles.")
        }
    })
}

export const getProductById = (id) =>{
    return new Promise ((resolver, rechazar) =>{
        const product = productosArrays.find((productos) => productos.id === parseInt(id))
        setTimeout(() =>{
            if(product){
                resolver(product)
            } else {
                rechazar("El producto no se encontró")
            }
        }, 1000)

    })
}

export const getCategories = () =>{
    return fetch("https://fakestoreapi.com/products/categories").then((res) => res.json())
}

