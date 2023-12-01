import React from 'react'

const Contact = () => {
    React.useEffect(()=>{
        window.scroll(300,300)
    }, [])
  return (
    <div>
 <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:aashima0021.be21@chitkara.edu.in">Aashima Mahajan</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/aashima-mahajan-1aa06a248/">Aashima's LinkedIn</a></p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
