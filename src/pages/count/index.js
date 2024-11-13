import React, {useState} from 'react'

export default function Count() {
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }
  return (
    <>
      <h2>{value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}
