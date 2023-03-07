# React adv

This application is the shell to practice lazyload (**react-router-dom-6**) and study different design patterns that I will be adding in different branches in my free time


## LazyLoad
It is a strategy that delays the loading of some files or modules

### **how to use?**
Components that you want to call with a lazy load need to have a default export.

```
export const LazyHomePage = () => {
  return <h1>Lazy Home</h1>;
};

export default LazyHomePage;
```

then inside our routes files we will use the react lazy function creating a constant and import our component inside that function.

```
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

export const routes: Route[] = [
  {
    path: '/home',
    to: 'home',
    Component: lazyHome,
    name: 'Home',
  },
];

```

Finally we wrap our router with the **suspense** component

```
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Sidebar } from '../01-lazyload/components/Sidebar';
import { routes } from './';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <Sidebar />
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

```
The **fallback** attribute is used to render a component while lazy loading is done
