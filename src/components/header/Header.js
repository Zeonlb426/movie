import Menu from "../menu/Menu";
import logo from '../../images/logo.svg';
import search from '../../images/search.svg'
import avatar from '../../images/avatar.webp'
import './Header.css'

function Header() {
  return (
    <div className="Header-block">
      <header className="Header-content">
        
        <div className="block1">
          <img src={logo} className="App-logo" />
          <Menu />
        </div>
        
        <div className="block2">
          <img src={search} className="App-search" />
          <div className="user">
            <div className="App-avatar" />
            <span>John Glich</span>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Header;