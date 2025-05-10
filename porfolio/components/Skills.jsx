import React from 'react'
import html from '../src/assets/images/HTML5.svg'
import css from '../src/assets/images/CSS3.svg'
import tailwind from '../src/assets/images/Tailwind.svg'
import bootstrap from '../src/assets/images/Bootstrap.svg'
import javascript from '../src/assets/images/JavaScript.svg'
import typescript from '../src/assets/images/TypeScript.svg'
import monogodb from '../src/assets/images/MongoDB.svg'
import express from '../src/assets/images/Express.svg'
import react from '../src/assets/images/React.svg'
import node from '../src/assets/images/Nodejs.svg'
import nest from '../src/assets/images/Nestjs.svg'
import docker from '../src/assets/images/Docker.svg'
import figma from '../src/assets/images/Figma.svg'
import postman from '../src/assets/images/Postman.svg'
import python from '../src/assets/images/Python.svg'


function Skills() {
  return (
    <div  style={{ marginTop: '7rem' }}>
      <p className='display-5 fw-bold text-warning text-center' data-aos="fade-up">Skills</p>
      <div className='d-flex flex-wrap justify-content-center gap-4 mt-4'>
        <img data-aos="zoom-in" src={python} style={{ width: '70px', height: '90px' }} alt="python" />
        <img data-aos="zoom-in" src={html} style={{ width: '70px', height: '90px' }} alt="html" />
        <img data-aos="zoom-in" src={css} style={{ width: '70px', height: '90px' }} alt="css" />
        <img data-aos="zoom-in" src={tailwind} style={{ width: '70px', height: '90px' }} alt="tailwind" />
        <img data-aos="zoom-in" src={bootstrap} style={{ width: '70px', height: '90px' }} alt="bootstrap" />
        <img data-aos="zoom-in" src={javascript} style={{ width: '70px', height: '90px' }} alt="js" />
        <img data-aos="zoom-in" src={typescript} style={{ width: '70px', height: '90px' }} alt="ts" />
        <img data-aos="zoom-in" src={react} style={{ width: '70px', height: '90px' }} alt="react" />
        <img data-aos="zoom-in" src={monogodb} style={{ width: '70px', height: '90px' }} alt="mongodb" />
        <img data-aos="zoom-in" src={express} style={{ width: '70px', height: '90px' }} alt="express" />
        <img data-aos="zoom-in" src={node} style={{ width: '70px', height: '90px' }} alt="node" />
        <img data-aos="zoom-in" src={nest} style={{ width: '70px', height: '90px' }} alt="nest" />
        <img data-aos="zoom-in" src={docker} style={{ width: '70px', height: '90px' }} alt="docker" />
        <img data-aos="zoom-in" src={postman} style={{ width: '70px', height: '90px' }} alt="postman" />
        <img data-aos="zoom-in" src={figma} style={{ width: '70px', height: '90px' }} alt="figma" />
      </div>
    </div>
  );
}


export default Skills