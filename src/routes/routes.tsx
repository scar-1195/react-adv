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
  },
  {
    path: '/no-lazy',
    to: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
