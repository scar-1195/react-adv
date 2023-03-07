import type { LazyExoticComponent } from 'react';
import { lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazyHome = lazy(
  async () => await import('../01-lazyload/pages/LazyHomePage'),
);

const lazyAbout = lazy(
  async () => await import('../01-lazyload/pages/LazyAboutPage'),
);

const lazyUsers = lazy(
  async () => await import('../01-lazyload/pages/LazyUsersPage'),
);

export const routes: Route[] = [
  {
    path: '/home',
    to: 'home',
    Component: lazyHome,
    name: 'Home',
  },
  {
    path: '/about',
    to: 'about',
    Component: lazyAbout,
    name: 'About',
  },
  {
    path: '/users',
    to: 'users',
    Component: lazyUsers,
    name: 'Users',
  },
];
