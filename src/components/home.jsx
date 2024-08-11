import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; 

function Home() {
  
  return (
    <div className='homecontainer'>
      <div className='content'>
        <h3>Hello, It's Me</h3>
        <h1>Arun Karthik</h1>
        <h3>And I'm a <span>Full Stack Developer</span></h3>
        <p>Creating impactful digital experiences with innovative solutions and a touch of creativity.</p>
        <div className='home-links'>
          <a href="https://www.facebook.com/arun.karthik.39948" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="mailto:elankumaran2103@gmail.com" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/arun-karthik-s-b1a391259/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Arun-Karthik-26" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <button><a href="/">Download CV</a></button>
      </div>
      <div className='image'>
        <img src="untitled-1.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
