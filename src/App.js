import React from 'react';
import {
  Banner,
  PromoList,
  TopBar,
  Wrapper
} from './components';

const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <PromoList />
      <Banner />
    </Wrapper>
  )
}

export default App;