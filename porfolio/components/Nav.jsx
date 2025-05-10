import React from 'react'
import github from '../src/assets/images/github.svg'
import linkedin from '../src/assets/images/linkedin.svg'

function Nav() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 px-md-5 py-3 bg-dark">
      <div>
        <p className="display-4 fw-bolder mb-0 text-white animate-slide-in-left">
          ANAMIKA RAJ
        </p>
      </div>
      <div className="d-flex gap-3">
        <a href="https://github.com/anamikaraj5" target="_blank" rel="noopener noreferrer">
          <img src={github} style={{ width: '40px', height: '60px' }} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/anamika-raj-993a3a298/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} style={{ width: '40px', height: '60px' }} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Nav
