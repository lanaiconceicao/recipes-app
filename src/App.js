import React from 'react';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

function App() {
  return (
    <main className={ style.main }>
      <Routes />
    </main>
  );
}

export default App;
