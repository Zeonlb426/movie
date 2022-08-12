
import './Poster.css'

function Poster(props) {

    const {movie}= props;

    console.log(movie);

    const divStyle = {
        color: '#fff',
        backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
      };

  return (
    <div className="Poster" style={divStyle}>
        <div className='Poster-dark'>
            <div className='Container'>
                <div className='Poster-content'>
                    <span className='Poster-title'>{movie.original_title}</span>
                    <p className='Poster-description'>{movie.overview}</p>
                    <div className='Poster-data'><span className='Poster-data-title'>Release date:</span> <span className='Poster-data-accent'>{movie.release_date}</span></div>
                    <div className='Poster-data'><span className='Poster-data-title'>Rating:</span> <span className='Poster-data-accent'>{movie.vote_average}</span></div>
                    <div className='Poster-data'><span className='Poster-data-title'>Vote count:</span> <span className='Poster-data-accent'>{movie.vote_count}</span></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Poster;