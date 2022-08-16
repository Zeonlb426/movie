import Header from '../../components/header/Header';
import './Show.css'

function Show() {
  return (
    <div className='app'>
        <Header />
        <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#fff', padding: '300px 50px' }}>Show page</div>
    </div>
  );
}

export default Show;