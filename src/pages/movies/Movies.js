import Header from '../../components/header/Header';
import './Movies.css'

function Movies() {
  return (
    <div className='App'>
        <Header />
        <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#fff', padding: '50px' }}>Movies page</div>
    </div>
  );
}

export default Movies;