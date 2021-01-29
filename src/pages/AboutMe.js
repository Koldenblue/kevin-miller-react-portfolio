import React from "react";
import Background from "../components/Background";
import { Animated } from "react-animated-css";
import { useSpring, animated } from 'react-spring';

function AboutMe() {

  let hrAnim = useSpring({
    width: '100%',
    from: { width: '0%' },
    config: { friction: 75 }
  })

  return (
    <>
      <Background image='../assets/images/beach2.jpg' />
      <div className='container nav-avoid bottom-space'>
        <div className='row'>
          <section className='col-md-7'>
            <Animated animationIn="fadeIn" animationInDelay={0} animationInDuration={1500} animationOut="fadeOut" isVisible={true}>
              <h1>Dance and Kickboxing at the YMCA</h1>
            </Animated>
            <animated.hr style={hrAnim} />
            <p>I am experienced teacher of <a href='https://oulafitness.com/' className='psychic-link' target='_blank' rel="noopener noreferrer">OULA dance fitness</a>, as well as kickboxing.
            Until the Covid-19 pandemic forced the closures of gyms, I taught back-to-back kickboxing and dance classes. Currently, I
            keep up with online classes. I believe in the power of group exercise to bring a community of people closer, as well as to promote teamwork.
          </p>
          </section>
          <figure className='col-md-5'>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1500} isVisible={true}>
              <img src={require('../assets/images/dance.jpg')} id='dance' alt='Leading a dance class' className="img-fluid about-me-img" />
            </Animated>
            <figcaption>Leading an OULA fitness dance class</figcaption>
          </figure>
        </div>

        <div className='row'>
          <figure className='col-md-5'>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1500} isVisible={true}>
              <img src={require('../assets/images/psychic.jpg')} id='psychic' alt='The Psychic Ferns Band' className="img-fluid about-me-img" />
            </Animated>
            <figcaption>The Psychic Ferns - Nathaniel Adkins, Kevin Miller, Kine Fall, and Rob Thompson</figcaption>
          </figure>
          <section className='col-md-7'>
            <Animated animationIn="fadeIn" animationInDelay={0} animationInDuration={1500} animationOut="fadeOut" isVisible={true}>
              <h1>Bassist and All-Around Musician</h1>
            </Animated>
            <animated.hr style={hrAnim} />
            <p>I am a bass guitarist with over a decade of experience. I have received classical music training as well, and have studied music theory and jazz theory.
            I enjoy playing several other instruments as well, including the trombone, electric guitar, and
            modular synthesizer. Pictured is my band from a few years back,
            <a href='https://thepsychicferns.bandcamp.com/releases' className='psychic-link' target='_blank' rel="noopener noreferrer">The Psychic Ferns</a>. Although our drummer
            and my great friend Professor Rob Thompson currently lives in New York, I look forward to playing music together again!
            In the meantime, I work on and record my own music projects. Some of my favorite activities have been going to music shows and jamming with
            other musicians. New bands and projects will be forthcoming!
          </p>
          </section>
        </div>
      </div>
    </>
  )
}


export default AboutMe;