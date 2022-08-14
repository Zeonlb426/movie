import Header from '../../components/header/Header';
import './Movies.css'

function Movies() {
  return (
    <div className='app'>
        <Header />
        <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#fff', padding: '300px 50px' }}>Movies page</div>
    </div>
  );
}

export default Movies;