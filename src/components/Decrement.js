import { useDispatch } from "react-redux"

const Decrement = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch({type: "@counter/decrement"})} >Decrementar</button>
    )
}

export default Decrement