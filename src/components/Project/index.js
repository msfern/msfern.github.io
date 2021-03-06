import React from 'react';
import './style.scss';

function Project({ details }) {
  const { name, image, description, techs, github, live } = details;

  return (
    <div className='project'>
      <img src={image} alt={name} className='project-img' />
      <div className='project-container'>
        <div className='project-name-links'>
          <h2 className='project-name'>{name}</h2>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <i className='fab fa-github' />
            </a>
          )}
          {live && (
            <a
              href={live}
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <i className='fas fa-external-link-alt' />
            </a>
          )}
        </div>
        <p className='project-desc'>{description}</p>
        <ul className='project-techs'>
          {techs.map((tech) => (
            <li key={tech} className='tech'>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
