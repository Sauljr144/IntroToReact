import React, { useEffect, useState } from 'react'

interface Props{}

const UseEffectExample = ({}:Props) => {
    const [count, setCount] = useState(0)

    //useEffect, aka side effect, whatever is in side of it, it will automatically load when the website loads. A hook, performs side effects. We can also control when it fires.
    useEffect(() => {

        // The code we want to execute goes here
        console.log('The count is', count);

        // option return function
        return() => console.log('I am the clean up function')

    }, [count]) // The dependancy array

  return (
    <div>
        <p>Count: {count}</p>
        <button className="btn btn-primary mx-3" onClick={()=> setCount(count => count - 1)}>-</button>
        <button className="btn btn-primary mx3" onClick={()=> setCount(count => count + 1)}>+</button>
    </div>
  )
}

export default UseEffectExample