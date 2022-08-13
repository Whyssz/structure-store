import {React, Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import BootstrapTest from './BootstrapTest'
// import App from './App';
// import AppToo from './ref';
import Memo from './memo';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Memo/>
    {/* <AppToo/> */}
    {/* <App /> */}
  </Fragment>
);
