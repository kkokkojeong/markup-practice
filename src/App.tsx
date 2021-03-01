import React from 'react';
import Header from './components/shared/header/Header';
import Lnb from './components/shared/lnb/Lnb';

import css from './App.module.scss';

const App = () => {
  return (
    <>
      {/* 헤더 */}
      <Header>헤더</Header>

      {/* Lnb - Local Navigation Bar */}
      <div className={css.app_container}>
        <Lnb />
      </div>
    </>
  );
}

export default App;
