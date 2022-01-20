import * as React from 'react';
import { useHistory } from 'react-router-dom';

export function MovieBox({ trailer, poster, name, rating, summary, id }) {
  const history = useHistory();

  const handleClick = () => {

    // console.log("clicked",id ,trailer,poster, name, rating,summary,);
    history.push('./movieDetails/' + id);


  };

  return (



    <div onClick={handleClick} className="movie-box">
      <div className='movie-body'>
        <h5>{name}</h5>
        <p>{summary}</p>
      </div>
      <img className='movie-poster' src={poster} alt='Movie-Poster' />
      <div className='movie-footer'>
        <div className='footer-rating'>
          <p>{rating}</p>
          <p>{rating}</p>
        </div>
        <div >
          <h4 className='footer-title'>{name}</h4>
          <p>Comedy</p>
        </div>
      </div>


    </div>




  );
}
