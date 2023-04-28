import React from 'react';
import '../assets/css/app.css';
import NavBar from './NavBar';
import Main from './Main';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <NavBar />
          <Main />
        </div>
    </React.Fragment>
  );
}

export default App;
