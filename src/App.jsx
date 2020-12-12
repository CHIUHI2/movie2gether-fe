import 'antd-mobile/dist/antd-mobile.css';
import './App.css';

import { Button } from 'antd-mobile';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
      <header className="App-header">
        <Button>Test</Button>
      </header>
    </Router>
  </div>
);

export default App;
