import React from 'react';
import { Animated } from "react-animated-css";
import Background from '../components/Background';
import {useSpring, animated} from 'react-spring';
import SummaryTabs from '../components/SummaryTabs';
import Sun from '../components/Sun/Sun';

function Home() {

  let contact = {
    areaCode: '(310) ',
    phone: '562-4572',
    email: 'klmille',
    domain: '@gmail.com'
  }

  let styles = {
    card: {
      'width': '18rem'
    },
    inlineAnimated: {
      'display': 'inline-block'
    }
  }

  let hrAnim = useSpring({
    width: '70%',
    from: {width: '0%'},
    config: {friction: 300}
  })

  return (
    <>
      <Background image='../assets/images/beach.jpg' />
      <Sun />
      <section className="jumbotron-fluid">
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
          <Animated animationIn="fadeIn" animationOut="fadeOut"  animationInDuration={1500} isVisible={true}>
            <img src={require('../assets/images/prof-photo.jpeg')} className='homepage-photo' alt='headshot' />
          </Animated>

            <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
              <h1 className="display-4">Kevin Miller, PhD</h1>
            </Animated>
            <Animated animationIn="fadeInLeft" animationInDelay={1000} animationInDuration={1500} animationOut="fadeOut" isVisible={true}>
              <p className="lead">Full-Stack Web Developer</p>
            </Animated>
            <Animated animationIn="fadeInLeft" animationInDelay={1200} animationInDuration={1500} animationOut="fadeOut" isVisible={true}>
              <p className="lead">{contact.email + contact.domain}</p>
            </Animated>
            <animated.hr className="my-4" style={hrAnim} />
            <div>
              <Animated animationIn="fadeInLeft" animationInDelay={2500} animationInDuration={2000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
                <pre>Chemist, </pre>
              </Animated>
              <Animated animationIn="fadeInDown" animationInDelay={2700} animationInDuration={2000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
                <pre>Small Business Manager, </pre>
              </Animated>
              <Animated animationIn="fadeInRight" animationInDelay={2900} animationInDuration={2000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
                <pre>Bassist, </pre>
              </Animated>
              <Animated animationIn="fadeInUp" animationInDelay={3100} animationInDuration={2000} animationOut="fadeOut" style={styles.inlineAnimated} isVisible={true}>
                <pre>Gym Fitness Teacher</pre>
              </Animated>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </section>
      <main className='container-fluid bottom-space' id='home-container'>
        <div className='row'>
          <div className='col-md-2'></div>


          <div className='col-md-8'>
            <SummaryTabs contact={contact} />
          </div>
          <div className='col-md-2'></div>
        </div>
      </main>
    </>
  )
}

export default Home;