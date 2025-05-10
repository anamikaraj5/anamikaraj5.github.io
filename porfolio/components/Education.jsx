import React from 'react'

function Education() {
  return (
    <div className="container " style={{ marginTop: '7rem' }}>
  <h2 className="display-5 fw-bold text-warning text-center">Education</h2>

  <div className="d-md-flex justify-content-center text-white fs-5 pt-4 " style={{ gap: '6rem' }}>
    <div className="mb-4">
      <ul className="list-unstyled  text-md-start">
        <li className="fw-bold">PG Diploma in Blockchain</li>
        <li>Kerala Blockchain Academy,</li>
        <li>Digital University of Kerala</li>
        <li>2024 - 2025</li>
      </ul>
    </div>

    <div className="mb-4">
      <ul className="list-unstyled text-md-start">
        <li className="fw-bold">B.Tech in Computer Science and Engineering</li>
        <li>Sahrdaya College of Engineering and Technology,</li>
        <li>APJ Abdul Kalam Technological University</li>
        <li>2019 - 2023</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Education
