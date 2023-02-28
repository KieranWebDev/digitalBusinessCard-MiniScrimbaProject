import './App.css';
import twitterLogo from './images/square-twitter.svg';
import gorrillazLogo from './images/OG.png';

// components
import MainPic from './components/MainPic';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <MainPic img={gorrillazLogo} />
      <Header
        name="Gorrillaz"
        jobTitle="Musicians/animated cartoons"
        website="https://www.gorillaz.com/"
      />
      <h1>test</h1>
    </div>
  );
}

export default App;
