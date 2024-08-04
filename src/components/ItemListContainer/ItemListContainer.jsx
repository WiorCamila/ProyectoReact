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

         //PROMESA
        getProducts(cat)
            .then((respuesta)=>{
            setProductos(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            
        })
    }, [cat])

   

    let titleToShow 

    if (titulo != undefined){
        titleToShow = titulo
    }else{
        titleToShow = otroTitulo 
    }


    return (
        <main>  
            <button onClick={()=> setCat("Home")}>Set categories = Vajilla</button>
            <button onClick={()=> setCat("Botellas")}>Category = Botellas</button>
            <div>
                <div>{titleToShow}</div>

            </div>
            <ItemList productos={productos}/>
            {/*<ItemCount stock={10} inicial={0}/> */}
            
        </main>
    )
}

export default ItemListContainer;