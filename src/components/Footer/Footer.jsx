import {productosArrays} from "../Mock/SimulatorData.js"
import { db } from "../../Firebase/dbConnection.js"
import { collection, addDoc } from "firebase/firestore"

const Footer = () => {

    const addProductos = () => {
        const productosCollection = collection(db, "productos")

        productosArrays.forEach((item) =>{
            addDoc(productosCollection, item)
            .then(doc =>{
                console.log("productos Agregado con ID: ", doc.id )
            })
            .catch(error =>{
                console.log("Hay un error en ID: ", error)
            })
        })
    }
    return(
        <>
            {/*<footer>
                <button onClick={addProductos}>agregar productos en la Base de datos</button>
            </footer>*/}

        </>
    )
}

export default Footer;