import React from "react";

const Counter = () => {
    const [count, dispatch] = React.useReducer(reducer, 0);
    console.log(React.useReducer);
    console.log(React.useReducer[0]);
    console.log(React.useReducer[1])
    console.log(React.useReducer());
    console.log([count, dispatch]);

    return (
        <div>
            Counter: {count}
            <button onClick ={()=> dispatch("INCREMENT")} >+</button>
            <button onClick ={()=> dispatch("DECREMENT")}>-</button>
        </div>
    )
}

const reducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}

export default Counter;