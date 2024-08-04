import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            {children}
            <Footer />
    
        </>
    )
    
}

export default Layout; 