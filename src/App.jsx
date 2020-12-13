import 'antd-mobile/dist/antd-mobile.css';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout';

const App = () => (
  <div className="App">
    <Router>
      <BasicLayout />
    </Router>
  </div>
);

export default App;
