import useFetch from './hooks/useFetch' 
import PostCard from './PostCard'

function PostList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="post-list">
      <h2>Community Posts</h2>
      {posts && posts.slice(0, 10).map(post => ( 
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
