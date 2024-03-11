export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a style={{ textDecoration: 'none' }} href='/'>
              Home
            </a>
          </li>
          <li>
            <a style={{ textDecoration: 'none' }} href='/about'>
              About
            </a>
          </li>
          <li>
            <a style={{ textDecoration: 'none' }} href='/career'>
              Career
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
