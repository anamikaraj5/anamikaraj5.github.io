import React from 'react';
import profilepic from '../src/assets/images/profilepic.jpeg';

function About() {
  return (
    <div className="container py-5 " style={{ marginTop: '7rem' }}> {/* Adjust margin-top here */}
      <div className="d-flex flex-column flex-md-row gap-5 ">
        <div className="text-center text-md-start">
          <img
            src={profilepic}
            alt="profile"
            className="rounded shadow"
            style={{ width: '200', maxWidth: '300px' }}
          />
        </div>

        <div>
          <h2 className="fw-bold mt-4 text-warning" style={{ fontSize: '3rem' }}>About</h2>
          <p className="pt-4 fs-5 lh-lg text-white">
          A B.Tech graduate in Computer Science and Engineering from Sahrdaya College of Engineering and Technology,
              having completed my degree in 2023. I further enhanced my practical knowledge by completing a Data Science
              internship at Luminar Technolab from September 2023 – April 2024. Currently, I’m pursuing a PG Diploma in Blockchain
              at Digital University Kerala. Through this program, I have gained hands-on experience with the MERN stack and have worked on multiple projects that demonstrate my skills in full-stack web development, particularly with MongoDB, React.js, Node.js, and Express.js.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;


