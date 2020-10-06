import React from 'react';
import {Animated} from "react-animated-css";
import Background from '../components/Background';


function Home() {

  let styles = {
    card: {
      'width':'18rem'
    },
    inlineAnimated: {
      'display': 'inline-block'
    }
  }

  return (
    <>
    <Background image='../assets/images/beach.jpg'/>
    <div id='home-body'>
    <main className='container bottom-space nav-avoid index-container'>
      <section className="jumbotron">
      <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
        <h1 className="display-4">Kevin Miller, PhD</h1>
      </Animated>
      <Animated animationIn="fadeInLeft" animationInDelay='1000' animationInDuration='1500' animationOut="fadeOut" isVisible={true}>
        <p className="lead">Web Developer</p>
      </Animated>
        <hr className="my-4" />
          <p>
            <Animated animationIn="fadeInLeft" animationInDelay='2500' animationInDuration='2000' animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
              <pre>Chemist, </pre>
            </Animated>
            <Animated animationIn="fadeInDown" animationInDelay='2700' animationInDuration='2000' animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
              <pre>Small Business Manager, </pre>
            </Animated>
            <Animated animationIn="fadeInRight" animationInDelay='2900' animationInDuration='2000' animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
              <pre>Bassist, </pre>
            </Animated>
            <Animated animationIn="fadeInUp" animationInDelay='3100' animationInDuration='2000' animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
              <pre>Gym Fitness Teacher</pre>
            </Animated>
          </p>
    </section>


        {/* <!-- row with cards: -->

    <!-- no-gutters className added to row, to remove space between columns.
    alternative was adding a background-image --> */}
        <section className='row no-gutters'>

          <div className='col-md-3'>
            <div className='box1 box'>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">Resume</h5>
                  <h6 className="card-subtitle mb-2 text-muted">To be added</h6>
                  <p className="card-text">Check out my resume on this very site!</p>
                  <a href="index.html" className="card-link psychic-link">Placeholder link for resume, to be added in the future</a>
                </div>
              </div>
            </div>
          </div>
          {/* 
      <!-- LinkedIn and Github icons could probably be placed on these cards --> */}
          <div className='col-md-3'>
            <div className='box2 box'>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">LinkedIn</h5>
                  <p className="card-text">Visit my LinkedIn profile, and add me to your network!</p>
                  <a href="https://www.linkedin.com/in/kevin-miller-1b197986/" className="card-link psychic-link">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='box2 box'>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">Github</h5>
                  <p className="card-text">Check out some of my work on github, including work in Python and Javascript! More webpages are forthcoming!</p>
                  <a href="https://github.com/Koldenblue" className="card-link psychic-link">Github Portfolio</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className='box3 box'>
              <div className="card" style={styles.card}>
                <div className="card-body">
                  <h5 className="card-title">Angel List</h5>
                  <p className="card-text">See my resume and visit my Angel List profile, where startups and job candidates meet!</p>
                  <a href="https://angel.co/u/kevin-miller-76" className="card-link psychic-link">Angel.co Profile</a>
                </div>
              </div>
            </div>
          </div>

        </section>
  </main>
  </div>
  </>
  )
}

export default Home;