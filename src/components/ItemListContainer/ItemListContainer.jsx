/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx"
import { db } from "../../Firebase/dbConnection.js"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"  
import { LoadingSpinner } from "../Loading/LoadingSpinner.jsx"
import { useCartContext } from "../../Context/CartContext.jsx"

const ItemListContainer = () =>{
    const [productos, setProductos] = useState([]) //ES UN ESTADO
    const { categoriasDeId } = useParams() //Esto es un Hook
    const [cargando, setCargando] = useState(true)
    const { titulo } = useCartContext()
    let tituloMostrar = titulo; 


    //useEffect
    useEffect(() =>{
        setCargando(true)
        let productosCollection = collection(db, "productos")

        if(categoriasDeId){
            productosCollection = query(productosCollection, where("category", "array-contains", categoriasDeId))
        }

            getDocs(productosCollection)
            .then(({docs}) =>{
                const productosDocs = docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setProductos(productosDocs)
                setCargando(false)
            })
            .catch((error)=>{
                console.log("Documento error: ", error)
            })
    }, [categoriasDeId])

    return (
        <main>
            <div >
                <div>{ tituloMostrar }</div>
                { cargando ? <LoadingSpinner /> : <ItemList productos={productos}/> }
            </div>

            {/*<ItemCount stock={10} inicial={0}/> */}
            
        </main>
    )
}

export default ItemListContainer;