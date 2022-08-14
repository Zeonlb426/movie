import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Poster from '../../components/poster/Poster';
import './Home.css'

function Home() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
      .then(res => res.json())
      .then(
        (answer) => {
          setIsLoaded(true);
          setItems(answer.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='app'>
        <Header />
        <Poster movies={items} />
        
        <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#fff', padding: '300px 50px' }}>Home page</div>
      </div>
    );
  };
}

export default Home;