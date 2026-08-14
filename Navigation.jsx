import { useNavigate, NavLink } from 'react-router-dom'

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/'); 
  };

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => isActive? "active-link" : ""}
      >
        Home
      </NavLink> |
      <NavLink to="/posts">Posts</NavLink> |
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navigation
