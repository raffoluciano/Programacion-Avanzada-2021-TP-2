import React from 'react'
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div style={{
      background: '#a8c0ff', /* fallback for old browsers */
      background: '-webkit-linear-gradient(to right, #3f2b96, #a8c0ff)',  /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to right, #3f2b96, #a8c0ff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height: '100%'

    }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>,



      {/* <Home /> */}
    </div>
  );
}

export default App;

