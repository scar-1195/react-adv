import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyAboutPage, LazyHomePage, LazyUsersPage } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>
      <ul>
        <li>
          <NavLink to='lazy1'>Lazy Nested 1</NavLink>
        </li>
        <li>
          <NavLink to='lazy2'>Lazy Nested 2</NavLink>
        </li>
        <li>
          <NavLink to='lazy3'>Lazy Nested 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='lazy1' element={<LazyHomePage />} />
        <Route path='lazy2' element={<LazyAboutPage />} />
        <Route path='lazy3' element={<LazyUsersPage />} />
        <Route path='*' element={<Navigate replace to='lazy1' />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
