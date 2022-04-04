import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = () => {
    const { a } = useSelector(state => state.customReducer);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({
            type: "increment"
        })

    }
    const decrement = () => {
        dispatch({
            type: "decrement"
        })
    }
    const incrementByValue = () => {
        dispatch({
            type: "incrementByNumber",
            payload: 10

        })
    }
    return (
        <div>
            <h1>{a}</h1>


            <button onClick={increment}>Increment</button>

            <br /><br />

            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementByValue}>Increment by value</button>

        </div>
    )
}

export default Home