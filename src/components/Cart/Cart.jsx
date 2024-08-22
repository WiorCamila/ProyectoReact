import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Table from 'react-bootstrap/Table';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/dbConnection";

const Cart = () =>{

    const [formularioData, setFormularioData] = useState({name:"", tel:"", email:""})

    const { carrito, total, removeCarrito, clearCarrito } = useCartContext()

    const handlerRemoveCarrito = (id, precio, qty) =>{
        removeCarrito(id, precio, qty)
    }
    const botonClearCarrito = () =>{
        clearCarrito()
    }

    const botonesChange = (e) => {
        setFormularioData({...formularioData, [e.target.name]: e.target.value})
    }

    const BotonGuardarCarrito = () => {
        console.log("Saving in dataBase")
        console.log("formularioData", formularioData)
        console.log("Carrito: ", carrito)

        const orderCollection = collection(db, "ordenes")
        const nuevoOrder = {
            comprador: formularioData, 
            productos: carrito,
            fecha: new Date(), 
            total: total,
        }

        addDoc(orderCollection, nuevoOrder)
        .then((doc) =>{
            alert("Se grabo la Orden con id: " + doc.id)
            console.log("Se grabo la Orden con id: " + doc.id)
            clearCarrito()
            setFormularioData({name:"", tel:"", email:""})
        })
        .catch((error) =>{
            console.log("error documento: ", error)
        })
    }

    return(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito?.map(({ id, name, precio, qty }, index) => {
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>$ {precio}</td>
                                <td>{qty}</td>
                                <td>
                                    <button onClick={() => handlerRemoveCarrito (id, precio, qty)}>Remove Items</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={4}>Total precio</td>
                        <td>$ {total}</td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={botonClearCarrito}> Clear Items</button>

            <input type="text" name="name" id="name" placeholder="Ingrese su Nombre" onChange={(e) => botonesChange(e)}/>
            <input type="number" name="tel" id="tel" placeholder="Ingrese su Telefono" onChange={(e) => botonesChange(e)}/>
            <input type="email" name="email" id="email" placeholder="Ingrese su Email" onChange={(e) => botonesChange(e)}/>
            <button onClick={BotonGuardarCarrito}>Finalizar Compra</button>
        </>
    )
}

export default Cart;