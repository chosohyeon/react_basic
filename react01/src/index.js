import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//한 페이지에서 냅다 다 보여주기떄문에 SPA(Single Page Application)이라고도 한다.
//CSR은 최초에 한번 서버에서 전체 페이지를 로딩하여 보여주고 이후에는 사용자의 요청이 올 때마다, 리소스를 서버에서 제공한 후 클라이언트가 해석하고 렌더링하는 방식

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);