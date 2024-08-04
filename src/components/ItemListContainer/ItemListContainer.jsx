/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList.jsx"
//import { productosArrays } from "../Mock/SimulatorData.js"
import { getProducts } from "../fetch/fetchData.js"


const ItemListContainer = ( {titulo, otroTitulo} ) =>{
    const [productos, setProductos] = useState([])
    const [cat, setCat] =useState("Mate")


    //useEffect
    useEffect(() =>{
        console.log("se monto el componente")

         //PROMESA
        getProducts()
            .then((respuesta)=>{
            console.log("se ejecuto la promesa")
            setProductos(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("finalizo la promesa")
        })
    }, [])

   

    let titleToShow 

    if (titulo != undefined){
        titleToShow = titulo
    }else{
        titleToShow = otroTitulo 
    }


    return (
        <>  
            <button onClick={()=> setCat()}>Set categories</button>
            <button onClick={()=> cat()}>Category</button>
            <div>
                <div>{titleToShow}</div>

            </div>
            <ItemList productos={productos}/>
            {/*<ItemCount stock={10} inicial={0}/> */}
            
        </>
    )
}

export default ItemListContainer;