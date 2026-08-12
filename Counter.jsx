import { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  // 1. Runs after every render
  useEffect(() => {
    console.log('Effect ran! Count:', count)
  })

  // 2. Runs only on mount
  useEffect(() => {
    console.log('Component mounted')
  }, [])

  // 3. Runs when count changes
  useEffect(() => {
    console.log('Count changed to:', count)
    document.title = `Count: ${count}`
  }, [count])

  // 4. Cleanup function
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick')
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log('Cleaned up!')
    }
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
