import './Home.css'; 
import backgroundImage from './assets/Background.jpg.jpg';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}> 
      <h1>Welcome to "Investment Innovations: Cutting-Edge Tactics for Wealth Growth"</h1>
    </div>
  );
}

export default Home;

