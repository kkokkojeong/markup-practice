import React from 'react';
import Header from './components/shared/header/Header';
import Lnb from './components/shared/lnb/Lnb';

import css from './App.module.scss';
import ContentContainer from './components/shared/content/ContentContainer';

const App = () => {
  return (
    <>
      {/* 헤더 */}
      <Header>헤더</Header>

      <div className={css.app_container}>
        {/* Lnb - Local Navigation Bar */}
        <Lnb />

        {/* Content */}
        <ContentContainer />
      </div>
    </>
  );
}

export default App;
