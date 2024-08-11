import React, { useState } from 'react';
import './App.css';

const projects = [
    {
      id: 1,
      title: 'Event Management System',
      image: 'event_management.jpeg',
      description: 'A comprehensive system for creating, managing, and tracking events. Features include user authentication, event creation and management, and an analytics dashboard. This project enhances user experience by providing a seamless platform for event organizers and participants.',
      technologies: 'HTML, CSS, JavaScript, NodeJs, PostgreSQL',
      github: 'https://github.com/Arun-Karthik-26/Event_Management_System'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      image: 'e-commerce.jpg',
      description: 'A robust e-commerce platform supporting multiple vendors, secure payment gateways, and user-friendly interfaces. Key features include product search, order management, and secure payment integration, aimed at providing a seamless shopping experience for users.',
      technologies: 'HTML, CSS, JavaScript, Python (Flask), MySQL',
      github: 'https://github.com/ElankumaranR/ecomerce'
    },
    {
      id: 3,
      title: 'JobQuest',
      image: 'jobquest.avif',
      description: 'A job-seeking platform that connects job seekers with employers. Features include job listings, application tracking, resume building, and real-time notifications to enhance job search efficiency and user engagement.',
      technologies: 'MERN stack - MongoDB, ReactJs, ExpressJs, NodeJs',
      github: 'https://github.com/Arun-Karthik-26/jobquest'
    }
  ];
  
function Project() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div className="project-container" id='projects'>
      <div className="heading">
        <h1>Notable Projects</h1>
        <p><strong><span>"</span> Projects are opportunities to learn, innovate, and transform ideas into reality <span>"</span></strong></p>
        </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h1>{project.title}</h1>
              <button onClick={() => openModal(project)}>Know more</button>
            </div>
          </div>
        ))}
      </div>
      {modalProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{modalProject.title}</h2>
            <p>{modalProject.description}</p>
            <p><strong>Technologies Used:</strong> {modalProject.technologies}</p>
            <div className="modal-links">
              <a href={modalProject.github}  rel='nopener noreferer'>GitHub Repository</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
