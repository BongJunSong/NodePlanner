/*
babel은 기본적으로 ES6(ecma2015) 문법으로 작성한 코드를 ES5 환경에서 동작할 수 있도록 
문법적인 변환을 해주지만 ES5에 존재하지 않는 ES6의 매서드나 생성자들까지 지원해주지는 않는다.
그래서 ES5로 동작하는 하위 브라우저를 지원하는 서비스를 개발할 때는 Polyfill을 추가하여 개발 
편의성을 향상시킬 수 있다.
*/
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';

import App from '@layouts/App';
// import store from '@store/config';

axios.defaults.withCredentials = true;
// TODO : 도메인 설정 필요
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://' : 'http://localhost:3090';
console.log('env', process.env.NODE_ENV === 'production');

render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */},
    {/* {process.env.NODE_ENV === 'production' ? (
      <App />
    ) : (
      <SWRDevtools>
        <App />
      </SWRDevtools>
    )} */}
  </BrowserRouter>,
  document.querySelector('#app'),
);
