import * as React from 'react';
import { useHistory } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function MovieBox({ poster, name, rating, summary, id, RTomatoes,genre }) {
  const history = useHistory();

  const handleClick = () => {

    // console.log("clicked",id ,trailer,poster, name, rating,summary,);
    history.push('./movieDetails/' + id);


  };
  
  const Genre =Object.keys(genre).filter((g)=> genre[g] );
  return (



    <div key={id} onClick={handleClick} className="movie-box">
      <div className='movie-body'>
        <h5>{name}</h5>
        <p>{summary}</p>
      </div>
      <img className='movie-poster' src={poster} alt='Movie-Poster' />
      <div className='movie-footer'>
        <div className='footer-rating'>
          <p>{rating}</p>
          <p><FavoriteIcon color='error' fontSize='inherit'/> {RTomatoes}%</p>
        </div>
        <div >
          <h4 className='footer-title'>{name}</h4>
          <p>{Genre.map((g,ind)=> (ind<Genre.length-1)?`${g}/`:g)}</p>
        </div>
      </div>


    </div>




  );
}
