import logo from './logo.svg';
import './App.css';
import intl from 'react-intl-universal';
import {Language} from './ChangeLang'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          编辑 <code>src/App.js</code> 保存刷新.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         学习react
        </a>
        <Language></Language>
      </header>
    </div>
  );
}

export default App;
