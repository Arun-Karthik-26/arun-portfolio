import './App.css';
function Skill() {
  return (
   <div className='skill-container' id='skills'>
    <div className="heading">
        <h1>My Skills</h1>
    </div>
    <div className="skillsets">
        <div className="skills">
       <div className="skill-box">
        <img src="css.png" alt="" />
        <h3>80%</h3>
       </div>
       <h1>CSS</h1>
       </div>
       <div className="skills">
       <div className="skill-box">
        <img src="js.png" alt="" />
        <h3>70%</h3>
       </div>
       <h1>Javascript</h1>
       </div><div className="skills">
       <div className="skill-box">
        <img src="node.png" alt="" />
        <h3>90%</h3>
       </div>
       <h1>NodeJs</h1>
       </div><div className="skills">
       <div className="skill-box">
        <img src="react.png" alt="" />
        <h3>85%</h3>
       </div>
       <h1>ReactJs</h1>
       </div><div className="skills">
       <div className="skill-box">
        <img src="database.png" alt="" />
        <h3>90%</h3>
       </div>
       <h1>Database</h1>
       </div>
       <div className="skills">
       <div className="skill-box">
        <img src="git.png" alt="" />
        <h3>70%</h3>
       </div>
       <h1>Git</h1>
       </div>
       <div className="skills">
       <div className="skill-box">
        <img src="java.png" alt="" />
        <h3>85%</h3>
       </div>
       <h1>Java</h1>
       </div>
    </div>
   </div>
  );
}

export default Skill;
