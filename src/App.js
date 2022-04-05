/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { useState, useEffect  } from 'react';
import './App.css';
import SearchIcon from './seacrh.svg'
import MovieCard from './MovieCard';

//e7e419e1
const API_URL = 'http://www.omdbapi.com?apikey=e7e419e1';



const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    //console.log(data.Search);
  }
  useEffect(() =>{
    searchMovies('Batman');
  },[]);

  return (
    <div className="App">
      <h1 className="header">MoviePalace</h1>

      <div className="search">
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value)

          }}
        />
        <img
        src={SearchIcon}
        alt='Search'
        onClick={() => { searchMovies(searchTerm);

        }}
        />
        </div>
        
        {
          movies?.length > 0 ?
          (
            <div className='container'>
            
              {movies.map((movie) => (
                  <MovieCard movie={movie}/>
                    )
                  )
                }
        
            </div>
          ) :
          (
            <div className='empty'>
              <h2>No Movies Found</h2>
                
            </div>
          )
        } 
  
    </div>
    );
}

export default App;