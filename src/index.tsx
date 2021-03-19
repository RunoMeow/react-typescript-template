import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import reportWebVitals from '@utils/reportWebVitals';
import { ApisProvider } from '@apis/.';
import Routes from './routes';
import '@/config';

Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: '2rem', color: '#ff8692' }} />);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApisProvider>
        <Routes />
      </ApisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
