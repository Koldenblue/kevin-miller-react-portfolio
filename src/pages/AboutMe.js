import React from "react";
import {Animated} from "react-animated-css";
import Background from "../components/Background";

class AboutMe extends React.Component {
  state = {

  }

  render() {
    return(
      <>
      <Background image='../assets/images/beach2.jpg' />
      <div className='container nav-avoid bottom-space'>

      <div className='row'>
        <section className='col-md-7'>
          <h1>Dance and Kickboxing at the YMCA</h1>
          <p>I teach weekly! Or, I taught weekly at the YMCA, until the Covid-19 pandemic forced the closures of gyms. But! I still 
            keep up with online classes. I keep in shape by learning new dances and practicing kickboxing!
          </p>
        </section>
        <figure className='col-md-5'>
          <img src={require('../assets/images/dance.jpg')} id='dance' alt='Leading a dance class' className="img-fluid" />
          <figcaption>Leading an OULA fitness dance class</figcaption>
        </figure>
      </div>
  
      <div className='row'>
        <figure className='col-md-5'>
          <img src={require('../assets/images/psychic.jpg')} id='psychic' alt='The Psychic Ferns Band' className="img-fluid" />
          <figcaption>The Psychic Ferns - Nathaniel Adkins, Kevin Miller, Kine Fall, and Rob Thompson</figcaption>
        </figure>
        <section className='col-md-7'>
          <h1>Bassist and All-Around Musician</h1>
          <p>I specialize in bass guitar, but I enjoy playing several instruments, including the trombone, electric guitar, and 
            modular synthesizer! Pictured is my band from a few years back, 
            <a href='https://thepsychicferns.bandcamp.com/releases' className='psychic-link'>The Psychic Ferns</a>. Although our drummer
            and my great friend Professor Rob Thompson currently lives in New York, I still look forward to playing music together again!
            In the meantime, I work on and record my own music projects. Some of my favorite activities have been going to music shows and jamming with 
            other musicians. New bands and projects will be forthcoming!
          </p>
        </section>
      </div>
  
    </div>
      </>
    )
  }
}

export default AboutMe;