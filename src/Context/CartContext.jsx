/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useState, useEffect, createContext, useContext } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
}

const CartContextProvider = ({children}) => {
    const [cantidadProductos, setCantidadProductos] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const localCart = JSON.parse(localStorage.getItem("carrito"));
        const localTotal = JSON.parse(localStorage.getItem("total"));
        const localQty = JSON.parse(localStorage.getItem("qty"));

        if(localCart && localTotal && localQty){
            setCart(localCart);
            setTotal(localTotal);
            setCantidadProductos(localQty);
        }
    },[]);

    const isInCart = (id) =>{
        return !!cart.find((elemento) => elemento.id === id);
    }

    const addToCart = (productos, qty) => {
        const newQty = cantidadProductos + qty;
        const newTotal = total + productos.precio * qty;
        let newCart = [];

        if(isInCart(productos.id)){
            newCart = cart.map((elemento)=>{
                if(elemento.id === productos.id) {
                    return {...elemento, qty: elemento.qty + qty};
                } else {
                    return elemento;
                }
            });
        } else {
            newCart = [...cart, {...productos, qty}];
        }
        
        setCart(newCart);
        setCantidadProductos(newQty);
        setTotal(newTotal);
        localStorage.setItem("carrito", JSON.stringify(newCart));
        localStorage.setItem("total", JSON.stringify(newTotal));
        localStorage.setItem("qty", JSON.stringify(newQty));
    }

    const removeCarrito = (id, precio, qty) => {
        const newTotal = total - precio * qty;
        const newQty = cantidadProductos - qty;
        const newCart = cart.filter((elemento) => elemento.id !== id);

        setCart(newCart);
        setTotal(newTotal);
        setCantidadProductos(newQty);
        localStorage.setItem("carrito", JSON.stringify(newCart));
        localStorage.setItem("total", JSON.stringify(newTotal));
        localStorage.setItem("qty", JSON.stringify(newQty));
    } 

    const clearCarrito = () => {
        setCart([]);
        setTotal(0);
        setCantidadProductos(0);
        localStorage.removeItem("carrito");
        localStorage.removeItem("total");
        localStorage.removeItem("qty");
    }

    const valueContext = {
        cantidadProductos,
        total,
        cart,
        addToCart,
        clearCarrito,
        removeCarrito,
    }

    return <Provider value={valueContext}> {children} </Provider>;
}

export default CartContextProvider;
