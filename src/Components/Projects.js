import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    React.useEffect(()=>{
        window.scroll(300,300)
    }, [])
  return (
    <div>
<section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="https://assets.uigarage.net/content/uploads/2016/01/tumblr_o0lx7tSxKG1ul8y65o1_1280.jpg"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Netflix Clone</h2>
            <div class="btn-container">
                
              <button
                class="btn btn-color-2 project-btn"
                // onclick="location.href='https://github.com/'"
              ><Link to="https://github.com/Aashima-123/NetflixClone_Bharat-Intern">
                Github</Link>
              </button>
              {/* <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button> */}
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="https://miro.medium.com/v2/resize:fit:856/1*-CR5gSYPutKSfGJ-H9PgAA.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Spotify Clone</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                // onclick="location.href='https://github.com/'"
              ><Link to="https://github.com/Aashima-123/Spotify_Clone">
                Github</Link>
              </button>
              {/* <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button> */}
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="https://i.pinimg.com/736x/26/5c/01/265c0105d0640c9e1975ebf6be667aca.jpg"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Burger House</h2>
            <div class="btn-container">
            <button
                class="btn btn-color-2 project-btn"
                // onclick="location.href='https://github.com/'"
              ><Link to="https://github.com/Aashima-123/burger-house">
                Github</Link>
              </button>
              {/* <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects
