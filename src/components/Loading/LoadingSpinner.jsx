import Spinner from 'react-bootstrap/Spinner';
import "../Loading/LoadingSpinner.css"

export const LoadingSpinner = () => {
    return(
        <>
            <div id='spinner'>
                <div className='spinner-img'>
                    <Spinner animation="grow" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        </>
    )
}

export default LoadingSpinner;