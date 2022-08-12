import { NavLink } from "react-router-dom";
import './Menu.css'

const routes = [
    {path: '/',         text: 'Home'},
    {path: '/movies',   text: 'Movies'},
    {path: '/show',     text: 'TV Show'},
    {path: '/video',    text: 'Video'},
    {path: '/faq',      text: 'FAQ'},
    {path: '/pricing',  text: 'Pricing'},
    {path: '/about',    text: 'About'},
];

function Menu() {
  return (
    <nav className="Navigation">
        <ul className="Menu">
            {routes.map((route, index) => (
                <li className="Menu-item" key={index}>
                    <NavLink 
                        className={({isActive}) => isActive ? "Select" : "Unselected" }
                        to={route.path}
                    >
                        {route.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default Menu;