function PostCard({ post }) {
  return (
    <article className="post-card" style={{border: '1px solid #ddd', padding: '15px', margin: '10px', borderRadius: '8px'}}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
    </article>
  )
}

export default PostCard
