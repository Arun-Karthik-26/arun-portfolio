import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function About() {
    return (
        <div className='about-container' id='about'>
          <div className='about-image'>
            <img src="data:image/png;base64,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" alt="" />
          </div>
          <div className="about-content">
           <div className='about-section'>
            <h1>About Me</h1>
            <hr className='divider'/>
            <p>I am Arun Karthik, a dedicated Full Stack Developer with a passion for 
                crafting seamless digital experiences. With a strong educational 
                background in Computer Science Engineering, I excel in 
                both front-end and back-end technologies. My achievements include winning 
                the coding competition and developing a successful 
                open-source project on GitHub.</p>
           </div>
           <div className="education-section">
            <div className='tit'>
              <h1 id='title'>Education</h1>
              <FontAwesomeIcon icon={faGraduationCap} id='edu-icon'/>
            </div>
              <div className="edu-section">
              <h1 id='current'>Studying</h1>
              <div>
                <h2>Bachelor of Engineering in Computer Science</h2>
                <p>Currently persuing at Kongu Engineering College, Erode, with a CGPA of <strong> 9.06 </strong>till the 3rd semester, expected to graduate in 2026.</p>
              </div>
            </div>
              <div className="edu-section">
                <h1>2022</h1>
                <div>
                <h2>Higher Secondary</h2>
                <p>Completed in Kalayana Sundaram Higher Secondary School,Thanjavur with <strong>93.33%</strong></p>
                </div>
              </div>
              <div className="edu-section">
                <h1>2020</h1>
                <div>
                <h2>Secondary School Leaving Certificate</h2>
                <p>Completed in Nav Bharat Matric Higher Secondary School with <strong>92.80%</strong></p>
                </div>
              </div>
           </div>
          </div>
        </div>
      );
}

export default About;
