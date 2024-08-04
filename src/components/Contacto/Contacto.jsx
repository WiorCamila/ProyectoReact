import { NavLink } from "react-router-dom";
import contact from "../Contacto/contact.png"

const Contacto = () => {
    return(
        <>  
            <NavLink>
                <img src={contact} alt="" />
            </NavLink>
            
        </>
    )
}

export default Contacto;