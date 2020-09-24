import React from 'react';
import "./home.css";

function Home() {

  let styles = {
    card: {
      'width':'18rem'
    }
  }
  return (
    <main class='container nav-avoid index-container'>
      <section class="jumbotron">
        <h1 class="display-4">Kevin Miller, PhD</h1>
        <p class="lead">Web Developer</p>
        <hr class="my-4" />
          <p>Chemist, Small Business Manager, Bassist, Gym Fitness Teacher</p>
    </section>


        {/* <!-- row with cards: -->

    <!-- no-gutters class added to row, to remove space between columns.
    alternative was adding a background-image --> */}
        <section class='row no-gutters'>

          <div class='col-md-3'>
            <div class='box1 box'>
              <div class="card" style={styles.card}>
                <div class="card-body">
                  <h5 class="card-title">Resume</h5>
                  <h6 class="card-subtitle mb-2 text-muted">To be added</h6>
                  <p class="card-text">Check out my resume on this very site!</p>
                  <a href="index.html" class="card-link psychic-link">Placeholder link for resume, to be added in the future</a>
                </div>
              </div>
            </div>
          </div>
          {/* 
      <!-- LinkedIn and Github icons could probably be placed on these cards --> */}
          <div class='col-md-3'>
            <div class='box2 box'>
              <div class="card" style={styles.card}>
                <div class="card-body">
                  <h5 class="card-title">LinkedIn</h5>
                  <p class="card-text">Visit my LinkedIn profile, and add me to your network!</p>
                  <a href="https://www.linkedin.com/in/kevin-miller-1b197986/" class="card-link psychic-link">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>

          <div class='col-md-3'>
            <div class='box2 box'>
              <div class="card" style={styles.card}>
                <div class="card-body">
                  <h5 class="card-title">Github</h5>
                  <p class="card-text">Check out some of my work on github, including work in Python and Javascript! More webpages are forthcoming!</p>
                  <a href="https://github.com/Koldenblue" class="card-link psychic-link">Github Portfolio</a>
                </div>
              </div>
            </div>
          </div>

          <div class='col-md-3'>
            <div class='box3 box'>
              <div class="card" style={styles.card}>
                <div class="card-body">
                  <h5 class="card-title">Angel List</h5>
                  <p class="card-text">See my resume and visit my Angel List profile, where startups and job candidates meet!</p>
                  <a href="https://angel.co/u/kevin-miller-76" class="card-link psychic-link">Angel.co Profile</a>
                </div>
              </div>
            </div>
          </div>

        </section>
  </main>
  )
}

export default Home;