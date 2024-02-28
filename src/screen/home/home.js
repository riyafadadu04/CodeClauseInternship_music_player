import React from 'react';
import { BrowserRouter as Router, Routes, Route, useActionData } from "react-router-dom";
import Library from '../library/library';
import Players from '../players/players';
import Artists from '../artists/artists';
import Sidebar from '../../components/sidebar/sidebar';
import './home.css';

function Home() {
  return (
    <Router>
      <div className="main-body">
        <div className='left-side'>
          <Sidebar />
        </div>
        <div className='right-side'>
          <Routes>
            <Route path="/players" element={<Players />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/" element={<Library />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Home;