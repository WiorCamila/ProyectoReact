import spinner from "../Loading/spinner.gif"

export const LoadingSpinner = () => {
    return(
        <>
            <div>
                <img src={spinner} alt="Loading ..." />
            </div>
        </>
    )
}

export default LoadingSpinner;