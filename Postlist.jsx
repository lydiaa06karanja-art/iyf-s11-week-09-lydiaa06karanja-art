
import useFetch from '../hooks/useFetch'
import PostCard from './PostCard'
import LoadingSpinner from '../components/shared/LoadingSpinner'  
import ErrorMessage from '../components/shared/ErrorMessage'      

function PostList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <LoadingSpinner text="Loading posts..." />  
  if (error) return <ErrorMessage message={error} />              

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
