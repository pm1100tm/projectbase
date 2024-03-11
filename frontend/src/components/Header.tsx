import { useNavigate } from 'react-router-dom';

import navs from '../constants/navs';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = (v: string) => {
    navigate(`/${v}`);
  };

  return (
    <header>
      <nav>
        <ul>
          {navs.map((name: string) => (
            <li key={`#nav-${name}`}>
              <button type='button' onClick={() => handleClick(name)}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
    </header>
  );
}
