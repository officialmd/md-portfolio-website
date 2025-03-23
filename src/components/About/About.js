import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Typewriter from 'typewriter-effect';
import { about } from '../../portfolio'
import './About.css'


const About = () => {
  const { name, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      <h2 className='about__role'>
          <Typewriter
            options={{
              strings: ['4th Year Computer Science Student @ Carleton University.', 'Travel Enthusiast.', 'Fitness Finatic.', 'Tea Connoisseur.',],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer">
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>
        
        )}
        {social && (
          <>
          {social.github && (
            <a
            href={social.github}
            aria-label='github'
            className='link link--icon'
            target="_blank"
            rel="noopener noreferrer"
            >
              <GitHubIcon />
              </a>
            )}
            
        {social.linkedin && (
          <a
          href={social.linkedin}
          aria-label='linkedin'
          className='link link--icon'
          target="_blank"
          rel="noopener noreferrer"
          >
            <LinkedInIcon />
            </a>
          )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
