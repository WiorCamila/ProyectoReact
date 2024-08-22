/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";

const cartContext = createContext()

export const { Provider } = cartContext // Provider = Proveedor

export const useCartContext = () => {
    return useContext(cartContext)
}

const CartContextProvider = ({children}) => {
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const localCarrito = JSON.parse(localStorage.getItem("carrito"))
        const localTotal = JSON.parse(localStorage.getItem("total"))
        const localQty = JSON.parse(localStorage.getItem("qty"))
        if(localCarrito && localTotal && localQty){
            setCarrito(localCarrito)
            setTotal(localTotal)
            setCantidadProductos(localQty)
        }
    },[])


    const isInCart = (id) =>{
        return carrito.find((elemento) => elemento.id === id)
    }

    const agregarAlCarrito = (productos, qty) => {
        setCantidadProductos(cantidadProductos + qty)
        setTotal(total + productos.precio * qty)
        let nuevoCarrito = []

        if(isInCart(productos.id)){
            nuevoCarrito = carrito.map((elemento)=>{
                if(elemento.id === productos.id) {
                    return {...elemento, qty: elemento.qty + qty}
                } else {
                    return elemento
                }
            })
        } else{
            nuevoCarrito = [...carrito, {...productos, qty}]   
        }
        setCarrito(nuevoCarrito)
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito))
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("qty", JSON.stringify(qty))

    }

    const removeCarrito = (id, precio, qty) => {
        setTotal(total - precio * qty)
        setCantidadProductos(cantidadProductos - qty)

        const nuevoCarrito = carrito.filter((elemento) => elemento.id !== id)

        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito))
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("qty", JSON.stringify(qty))
    } 
    const clearCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadProductos(0)
        localStorage.removeItem("carrito")
        localStorage.removeItem("total")
    }

    const valueContext = {
        titulo: "Bienvenido a Binah Deco.",
        cantidadProductos, // cantidadProductosArrays = "KEY" // cantidadProductosArrays = "VALUE".
        total,
        carrito,
        agregarAlCarrito,
        clearCarrito,
        removeCarrito,
    }

    return <Provider value={valueContext}> { children } </Provider>
}

export default CartContextProvider;