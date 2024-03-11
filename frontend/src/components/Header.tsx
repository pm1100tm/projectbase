import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/career'>Career</NavLink>
          </li>
          <li>
            <button type='button' onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
