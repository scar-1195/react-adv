import {
  BrowserRouter,
  Navigate,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import { activeClass } from '../helpers/activeClass';
import logo from '../assets/react.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img id='logo' src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/home' className={activeClass}>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={activeClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className={activeClass}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='about' element={<h1>About Page</h1>} />
          <Route path='users' element={<h1>Users Page</h1>} />
          <Route path='home' element={<ShoppingPage />} />

          <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
