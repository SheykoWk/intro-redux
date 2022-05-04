import { useSelector } from "react-redux"

const Value = () => {

    const value = useSelector(state => state.counter)

    return(
        <h1>{value}</h1>
    )
}

export default Value