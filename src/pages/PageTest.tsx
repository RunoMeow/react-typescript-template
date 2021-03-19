import { useEffect } from 'react';

import { useApis } from '@/apis';
import { apisTestTest } from '@/apis/apisTest';
import ComponentTest from '@/components/Test';
import logo from '@assets/logo.svg';

export default function PageTest() {
  const apis = useApis();
  useEffect(() => {
    apis(apisTestTest)({});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ComponentTest />
      </header>
    </div>
  );
}
