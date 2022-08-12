import Header from '../../components/header/Header';
import './About.css'

function About() {
  return (
    <div className='App'>
        <Header />
        <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#fff', padding: '300px 50px' }}>About page</div>
    </div>
  );
}

export default About;