import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
const Astros = lazy(() => import('../pages/astros/Astros'));
const Aumentos = lazy(() => import('../pages/aumento/Aumentos'));
const Fluye = lazy(() => import('../pages/fluye/Fluye'));

const RouteConfig = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/amor-drama-y-astros" component={Astros} />
        <Route path="/manifestando-aumentos" component={Aumentos} />
        <Route path="/fluye-en-la-u" component={Fluye} />
      </Switch>
    </Suspense>
  );
};

export default RouteConfig;
