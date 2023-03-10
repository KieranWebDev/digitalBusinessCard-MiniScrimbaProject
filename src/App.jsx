import './App.css';
import gorrillazLogo from './images/OG.png';

// components
import MainPic from './components/MainPic';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <MainPic img={gorrillazLogo} />
      <AboutMe
        name="Gorrillaz"
        jobTitle="Musicians/animated cartoons"
        website="https://www.gorillaz.com/"
        aboutMeText="top part of the text blsdjgdfghjghregndfgnughbnjbknrtbrt"
        interestsText="bottom fnjfngnbergbdfbgdfgerugbeugbfghjbrhgberg"
      />
      <Footer
        twitter="https://twitter.com/gorillaz"
        instagram="https://www.instagram.com/gorillaz/"
        github="github.com/gorillaz"
        linkedin="https://www.linkedin.com/company/gorillaz/"
      />
    </div>
  );
}

export default App;
