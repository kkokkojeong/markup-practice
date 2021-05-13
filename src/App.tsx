import React, { useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/shared/header/Header';
import Lnb from './components/shared/lnb/Lnb';
import ContentContainer from './components/shared/content/ContentContainer';

import css from './App.module.scss';
import RoutesPath from './constant/RoutesPath';

const App = () => {

  const Home = useMemo(() => {
    return () => (
      <div className={css.app_container}>
          {/* 헤더 */}
          <Header>헤더</Header>
          {/* Lnb - Local Navigation Bar */}
          <Lnb />
          {/* Content */}
          <ContentContainer />
      </div>
    )
  }, [])

  const Subscriptions = useMemo(() => {
    return () => (
      <div>구독</div>
    )
  }, [])

  return (
    <Router>
      <Switch>
        {/* 구독 */}
        <Route path={RoutesPath.Subscriptions} component={Subscriptions} />
        {/* Home */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
