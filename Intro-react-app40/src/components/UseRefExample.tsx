import React, { useRef, useState } from 'react'

const UseRefExample = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        // to increment we want to do a call back function to increment to avoid any issues
        setCount(count => count + 1);
        console.log('State', count);
        countRef.current++;
        console.log('Ref', countRef.current);
    }

  return (
    <div>
        <p>UseRef vs. useState</p>
        <p>{countRef.current}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default UseRefExample