import Menu from "../menu/Menu";
import logo from '../../images/logo.svg';
import './Header.css'

function Header() {
  return (
    <div className="Header-block">
      <header className="Header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu />
      </header>
    </div>
  );
}

export default Header;