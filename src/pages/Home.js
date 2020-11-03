import React, { useEffect, useState } from 'react';
import { Animated } from "react-animated-css";
import Background from '../components/Background';
import SummaryTabs from '../components/SummaryTabs';


function Home() {
  const [opacity, setOpacity] = useState(0)

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
    },
    homepagePhoto: {
      opacity: opacity
    }
  }

  useEffect(() => {
    setOpacity(1);
  },[])

  return (
    <>
      <Background image='../assets/images/beach.jpg' />

      <main className='container bottom-space nav-avoid index-container'>

        <section className="jumbotron">
            <img src={require('../assets/images/prof-photo.png')} className='homepage-photo' alt='headshot' style={styles.homepagePhoto}/>
          <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <h1 className="display-4">Kevin Miller, PhD</h1>
          </Animated>
          <Animated animationIn="fadeInLeft" animationInDelay={1000} animationInDuration={1500} animationOut="fadeOut" isVisible={true}>
            <p className="lead">Full-Stack Web Developer</p>
          </Animated>
          <Animated animationIn="fadeInLeft" animationInDelay={1200} animationInDuration={1500} animationOut="fadeOut" isVisible={true}>
            <p className="lead">{contact.email + contact.domain}</p>
          </Animated>
          <hr className="my-4" style={{width: '70%'}}/>
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
        </section>

          <SummaryTabs contact={contact}/>

      </main>
    </>
  )
}

export default Home;