import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../fetch/fetchData";
import { LoadingSpinner } from "../Loading/LoadingSpinner.jsx"
import ItemLDetail from "../ItemDetail/ItemDetail.jsx"


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})

    const [cargando, setCargando] = useState(true)
    
    const { id } = useParams()

    useEffect(() =>{
        setCargando(true)
        getProductById(id)
            .then((respuesta)=>{
            setProduct(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setCargando(false)
            
        })
    },[id])

    return(
        <>
            <main>
                { cargando ? <LoadingSpinner /> : <ItemLDetail product={product}/> }
            </main>
        </>
    )
}

export default ItemDetailContainer;