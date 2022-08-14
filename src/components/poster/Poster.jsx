import React, { useState } from "react";
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Poster.css'

function Poster(props) {

    const {movies}= props;

    const [movie, setMovie] = useState(movies[Math.floor(Math.random() * 19)]);

    const divStyle = {
        backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
    };

  return (
    <div className="poster" style={divStyle}>
        <div className='poster-dark'>
            <div className='container'>
                <div className='poster-content'>
                    <span className='poster-title'>{movie.original_title}</span>
                    <div className='poster-text'>{movie.overview}</div>
                    <div className="poster-statistic">
                        <div className='poster-data'>
                            <span className='poster-data-title'>Release date:</span>
                            <span className='poster-data-accent'>{movie.release_date}</span>
                        </div>
                        <div className='poster-data'>
                            <span className='poster-data-title'>Rating:</span>
                            <span className='poster-data-accent'>{movie.vote_average}</span>
                        </div>
                        <div className='poster-data'>
                            <span className='poster-data-title'>Vote count:</span>
                            <span className='poster-data-accent'>{movie.vote_count}</span>
                        </div>
                    </div>
                </div>    
                <div className='poster-carusel'>
                    <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={5}>
                        {movies.map((movie, index) => (
                            <SwiperSlide key={index}>
                            <div className='poster-element' onClick={(event, key=index) => setMovie(movies[index])}>
                                <img className='poster-img' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt='Poster movie'/>
                                <div className='poster-average'>{movie.vote_average}</div>
                            </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>                
            </div>
        </div>
    </div>
  );
}

export default Poster;