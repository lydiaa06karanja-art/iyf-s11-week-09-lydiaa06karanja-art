import { useState } from 'react'
import Counter from '../Counter'
import UserProfile from '../UserProfile'
import WindowSize from '../WindowSize'
import ThemeToggle from '../ThemeToggle'
import PostList from '../PostList'

import Button from '../components/Button';
function Home() {
  const [userId, setUserId] = useState(1)

  return (
<div className="p-5 font-sans">
    
      <h1>Week 9 - Task 17.1: useEffect Hook</h1>
      <PostList />
      <section>
        <h2>Exercise 1: Understanding useEffect</h2>
        <Counter />
      </section>

      <hr />

      <section>
        <h2>Exercise 2: Common useEffect Patterns</h2>
        <h3>Pattern 1: Fetch Data</h3>

        <Button 
  variant="primary" 
  onClick={() => setUserId(userId === 1 ? 2 : 1)}
>
  Switch User ID: {userId}
</Button>

        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
  <Button variant="secondary">Secondary</Button>
  <Button variant="danger">Danger</Button>
</div>
        <UserProfile userId={userId} />

        <h3>Pattern 2: Event Listeners</h3>
        <WindowSize />

        <h3>Pattern 3: localStorage Sync</h3>
        <ThemeToggle />
      </section>
    </div>
  )
}

export default Home
