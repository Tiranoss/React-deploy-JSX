import React from 'react'
import image from './Photos/image.png'
import mangas from './Photos/mangas.png'
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="containerHeader">
          <h1 className="title">BILEL THE KING</h1>
          <br />
          <div className="logos">
          <img src={image} />
          <br />
          <img src={mangas} />
          </div>
        </div>
        <div className="videos">
        <iframe width="664" height="480" src="https://www.youtube.com/embed/i1IKnWDecwA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  );
}

export default App;
