import { NavLink } from 'react-router-dom';
import { activeClass } from '../../helpers/activeClass';
import {routes} from '../../routes';
import logo from '../../assets/react.svg';

export const Sidebar = () => {
  return (
    <nav>
      <img id='logo' src={logo} alt='React Logo' />
      <ul>
        {routes.map(route => (
          <li key={route.to}>
            <NavLink to={route.to} className={activeClass}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
