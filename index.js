import { Route } from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>,
    document.getElementById('app')
);