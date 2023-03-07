# LazyLoad by modules

In this way we can make a lazy load that brings different modules and not just one

## **how to use?**

First we will create a layout that could be our dashboard or the user module or the one that separates our authentication system.

remembering that every module with lazy loading needs its export by default

```
export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout Page</h1>
    </div>
  );
};

export default LazyLayout;

```

This component is responsible for rendering our child routes.

We call our component in the routes file. It is important to note that in the routes file we enclose the path between slashes with an asterisk to indicate that everything that enters the lazyload route will be loaded with the layout module.

```
import type { LazyExoticComponent } from 'react';
import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazyLayout = lazy(
  async () => await import('../01-lazyload/layout/LazyLayout'),
);

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: lazyLayout,
    name: 'Lazy Layout',
  }
];


```

Now we just create our routes inside the layout without lazy loading

```
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

```
