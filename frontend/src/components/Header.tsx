// import NavElement from './NavElement';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/career'>Career</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
