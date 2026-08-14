import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/posts">Posts</Link> |
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* This is where Home, Posts, About etc will render */}
      </main>

      <footer>
        <p>&copy; 2026 Community</p>
      </footer>
    </div>
  )
}

export default Layout
