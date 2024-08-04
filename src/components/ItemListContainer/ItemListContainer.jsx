/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx"
import { getProducts } from "../fetch/fetchData.js"
import { useParams } from "react-router-dom"  
import { LoadingSpinner } from "../Loading/LoadingSpinner.jsx"



const ItemListContainer = () =>{
    const [productos, setProductos] = useState([]) //ES UN ESTADO
    const { categoriasDeId } = useParams() //Esto es un Hook
    const [cargando, setCargando] = useState(true)


    //useEffect
    useEffect(() =>{
        setCargando(true)

         //ESTO ES UNA PROMESA
        getProducts(categoriasDeId)
            .then((respuesta)=>{
            setProductos(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
            
        })
    }, [categoriasDeId])


    return (
        <main className="card-container" >
            <div >
                { cargando ? <LoadingSpinner /> : <ItemList productos={productos}/> }
            </div>

            {/*<ItemCount stock={10} inicial={0}/> */}
            
        </main>
    )
}

export default ItemListContainer;