import Spinner from 'react-bootstrap/Spinner';
import "../Loading/LoadingSpinner.css"

export const LoadingSpinner = () => {
    return(
        <>
            <div className='spinner-img'>
                <Spinner animation="border" role="status" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                
            </div>
        </>
    )
}

export default LoadingSpinner;