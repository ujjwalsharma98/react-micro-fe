import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default Counter;