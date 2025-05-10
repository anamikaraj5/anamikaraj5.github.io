import React from 'react'
import budgetbuddy from '../src/assets/images/budgetbuddy.png'
import eternal from '../src/assets/images/eternal.png'
import earbloom from '../src/assets/images/earbloom.png'

function Projects() {
  return (
    <div className="container" style={{ marginTop: '8rem' }}>
      <h2 className="display-5 fw-bold text-warning text-center">Projects</h2>

      <div className="row justify-content-center g-4 pt-4 mb-3">

        {/* Budget Buddy */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-white border-warning h-100" style={{ backgroundColor: '#000000', borderWidth: '4px' }}>
            <div className="card-body">
              <h5 className="card-title text-info fw-bold mb-4">Budget Buddy</h5>
              <img src={budgetbuddy} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="budget buddy" />
              <p className="card-text fs-5 mb-2 mt-4">• An expense tracker that lets users add, view, update, and delete daily expenses.</p>
              <p className="card-text fs-5">• Users can set, manage, and track category-wise monthly budgets with multi-user support.</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                <img src="https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/express.js-%23404D59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
                <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="React" />
                <img src="https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                <img src="https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                <img src="https://img.shields.io/badge/postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
              </div>
              <a href="https://github.com/anamikaraj5/BudgetBuddy" className="btn btn-outline-light btn-sm mt-4">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* Eternal Shelves */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-white border-warning h-100" style={{ backgroundColor: '#000000', borderWidth: '4px' }}>
            <div className="card-body">
              <h5 className="card-title text-info fw-bold mb-4">Eternal Shelves</h5>
              <img src={eternal} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="eternal shelves" />
              <p className="card-text fs-5 mb-2 mt-4">• A library management system where admin can add, view, update, and delete books.</p>
              <p className="card-text fs-5">• Users can browse and view book listings through a clean, user-friendly interface.</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                <img src="https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/express.js-%23404D59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
                <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="React" />
                <img src="https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                <img src="https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                <img src="https://img.shields.io/badge/postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
              </div>
              <a href="https://github.com/anamikaraj5/Eternal-Shelves" className="btn btn-outline-light btn-sm mt-4">View on GitHub</a>
            </div>
          </div>
        </div>

        {/* EarBloom */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card text-white border-warning h-100" style={{ backgroundColor: '#000000', borderWidth: '4px' }}>
            <div className="card-body">
              <h5 className="card-title text-info fw-bold mb-4">EarBloom</h5>
              <img src={earbloom} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="earbloom" />
              <p className="card-text fs-5 mb-2 mt-4">• An e-commerce app where admin manage products by adding, updating, viewing, and deleting them.</p>
              <p className="card-text fs-5">• Users can browse products, manage their cart, and complete purchases through a secure payment flow.</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                <img src="https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <img src="https://img.shields.io/badge/express.js-%23404D59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
                <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
                <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
                <img src="https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                <img src="https://img.shields.io/badge/postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
              </div>
              <a href="https://github.com/anamikaraj5/EarBloom" className="btn btn-outline-light btn-sm mt-4">View on GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;



