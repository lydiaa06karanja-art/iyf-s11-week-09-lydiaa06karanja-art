import { Link } from 'react-router-dom'

const dummyPosts = [
  { id: 1, title: 'First Post' },
  { id: 2, title: 'Second Post' },
  { id: 3, title: 'Third Post' },
]

function Posts() {
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {dummyPosts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
