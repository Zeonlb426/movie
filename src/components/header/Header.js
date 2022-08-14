import Menu from "../menu/Menu";
import logo from '../../images/logo.svg';
import search from '../../images/search.svg'
import avatar from '../../images/avatar2.webp'
import './Header.css'

function Header() {

  return (
    <div className="header-block">
      <header className="header-content">
        <div className="block1">
          <img src={logo} className="app-logo" alt=""/>
          <Menu />
        </div>
        <div className="block2">
          <img src={search} className="app-search" alt=""/>
          <div className="user">
            <img src={avatar} className="app-avatar" alt=""/>
            <span>John Glich</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;