import { NavLink } from 'react-router-dom';

export default function Header() {
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
            <NavLink to='/logout'>Logout</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
