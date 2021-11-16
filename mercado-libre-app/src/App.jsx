import React from 'react'
import Home from './pages/Home';


function App() {
  return (
    <div  style={{
      background: '#a8c0ff', /* fallback for old browsers */
      background:'-webkit-linear-gradient(to right, #3f2b96, #a8c0ff)',  /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to right, #3f2b96, #a8c0ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height: '100%'

    }}>
      <Home/>
    </div>
  );
}

export default App;

