import React from 'react';
import './style.css';
import Header from './components/Header';
import Meme from './components/Meme';
export default function App() {
  return (
    <div className="main">
      <Header />
      <Meme />
    </div>
  );
}
