import logo from './logo.svg';
import './App.css';
import intl from 'react-intl-universal';
import { useI18n } from './ChangeLang.bak.js';
import React from 'react';
function App() {
  const {lang, changeLanguage} = useI18n('en_US')
  const test  = (name) => {
    return `我是${name}`
  }
  const name = '代维维'
  return <div className="App">
            <header className="App-header">
              <p>
                编辑 <code>src/App.js</code> 保存刷新.
              </p>
              {test(name)}
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              学习react
              </a>
        </header>
        {/* <Language lang={lang} setLang={setLang}></Language> */}
        <button onClick={() => changeLanguage()}>切换语言{lang}</button>
      </div>
  
}

export default App;
