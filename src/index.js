import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const render = Component => {
   ReactDOM.render(
      <AppContainer>
         <Component />
      </AppContainer>,
      document.getElementById('root')
   );
}

