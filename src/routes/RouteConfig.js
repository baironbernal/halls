import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
const Astros = lazy(() => import('../pages/astros/Astros'));
const Aumentos = lazy(() => import('../pages/aumento/Aumentos'));
const Fluye = lazy(() => import('../pages/fluye/Fluye'));
const Policy = lazy(() => import('../pages/policies/Policy'));

const RouteConfig = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/halls" component={Home} />
        <Route exact path="/amor-drama-y-astros" component={Astros} />
        <Route exact path="/manifestando-aumentos" component={Aumentos} />
        <Route exact path="/fluye-en-la-u" component={Fluye} />
        <Route exact path="/politicas-de-privacidad" component={Policy} />
      </Switch>
    </Suspense>
  );
};

export default RouteConfig;
