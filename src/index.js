import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDom.render(
  <SpeechProvider appId='9584574c-8ca5-41d6-a79e-010a7eff1c9e' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
