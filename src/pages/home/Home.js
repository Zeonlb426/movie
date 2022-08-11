import Header from '../../components/header/Header';
import './Home.css'

function Home() {
  return (
    <div className='App'>
        <Header />
        <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#fff', padding: '50px' }}>Home page</div>
    </div>
  );
}

export default Home;