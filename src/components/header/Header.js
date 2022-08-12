import Menu from "../menu/Menu";
import logo from '../../images/logo.svg';
import search from '../../images/search.svg'
import avatar from '../../images/avatar2.webp'
import './Header.css'

function Header() {

  return (
    <div className="Header-block">
      <header className="Header-content">
        <div className="Block1">
          <img src={logo} className="App-logo" alt=""/>
          <Menu />
        </div>
        <div className="Block2">
          <img src={search} className="App-search" alt=""/>
          <div className="User">
            <img src={avatar} className="App-avatar" alt=""/>
            <span>John Glich</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;