import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function PostDetail() {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => {
        setPost(data)
        setLoading(false)
     })
  }, [postId]);

  if (loading) return <p>Loading...</p>
  if (!post) return <p>Post not found</p>

  return (
    <article>
      <Link to="/posts">&larr; Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  )
}

export default PostDetail
