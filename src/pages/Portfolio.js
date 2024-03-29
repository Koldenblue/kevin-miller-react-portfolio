import React, { useState, useRef } from "react";
import Background from "../components/Background";
import ProjectTableOfContents from "../components/ProjectTableOfContents";
import ZoomFadeIn from '../components/ZoomFadeIn/ZoomFadeIn';
import ZoomFadeContext from '../components/ZoomFadeIn/ZoomFadeContext';
import Contributions from "../components/Contributions";

function Portfolio() {
  // this state is provided, through the provider, to the zoom image components
  // in this way, currentlyZoomed is like a global variable shared among every zoomImage component,
  // and each of them has access to the set function.
  // the alternative would be to pass down this state thru props.
  // second alternative would be to store global state in a redux store
  const [currentlyZoomed, setCurrentlyZoomed] = useState(false);

  const ripplerRef = useRef();
  const calendarRef = useRef();
  const lavaRef = useRef();
  const bartenderRef = useRef();
  const informRef = useRef();
  const parabubRef = useRef();
  const readmeRef = useRef();
  const mernTemplateRef = useRef();
  const newsRef = useRef();
  const financeRef = useRef();
  const hamRef = useRef();
  const journalRef = useRef();
  const chessRef = useRef();
  const empFinderRef = useRef();
  const managerRef = useRef();
  const trekRef = useRef();
  const quizRef = useRef();
  const weatherRef = useRef();
  const noteRef = useRef();
  const passRef = useRef();
  const templateRef = useRef();
  const workdayRef = useRef();
  const balanceRef = useRef();
  const connectRef = useRef();
  const flaskJournalRef = useRef();
  const aimhiRef = useRef();

  // ==========================================================================================================================
  // img refs for gifs
  const ripplerImgRef = useRef();
  const paraImgRef = useRef();
  const barImgRef = useRef();
  const informImgRef = useRef();
  const journalImgRef = useRef();
  const trekImgRef = useRef();
  const lavaImgRef = useRef();
  const calendarImgRef = useRef();

  // these functions change images to a gif when moused over. The zoomed-in lgimg is still the original image
  const ripplerGif = () => {
    ripplerImgRef.current.setAttribute('src', require('../assets/images/color-rippler.gif'));
  }
  // change back to the original image upon mouseOut
  const restoreRippler = () => {
    ripplerImgRef.current.setAttribute('src', require('../assets/images/color-rippler.PNG'));
  }

  const paraGif = () => {
    paraImgRef.current.setAttribute('src', require('../assets/images/para-bubbles.gif'));
  }
  const restorePara = () => {
    paraImgRef.current.setAttribute('src', require('../assets/images/para-bubbles.jpeg'));
  }

  const barGif = () => {
    barImgRef.current.setAttribute('src', require('../assets/images/express-bartender.gif'));
  }
  const restoreBar = () => {
    barImgRef.current.setAttribute('src', require('../assets/images/express-bartender.jpeg'));
  }

  const informGif = () => {
    informImgRef.current.setAttribute('src', require('../assets/images/inform-react.gif'));
  }
  const restoreInform = () => {
    informImgRef.current.setAttribute('src', require('../assets/images/inform.jpeg'));
  }

  const journalGif = () => {
    journalImgRef.current.setAttribute('src', require('../assets/images/journal.gif'))
  }
  const restoreJournal = () => {
    journalImgRef.current.setAttribute('src', require('../assets/images/redux-journal.jpeg'))
  }

  const trekGif = () => {
    trekImgRef.current.setAttribute('src', require('../assets/images/trek.gif'));
  }
  const restoreTrek = () => {
    trekImgRef.current.setAttribute('src', require('../assets/images/trek.png'));
  }

  const lavaGif = () => {
    lavaImgRef.current.setAttribute('src', require('../assets/images/lava-lamp.gif'));
  }
  const restoreLava = () => {
    lavaImgRef.current.setAttribute('src', require('../assets/images/lava-lamp.png'));
  }

  const calendarGif = () => {
    calendarImgRef.current.setAttribute('src', require('../assets/images/calendar.gif'));
  }
  const restoreCalendar = () => {
    calendarImgRef.current.setAttribute('src', require('../assets/images/calendar.PNG'));
  }
  // ==========================================================================================================================

  return (
    <>
      <ZoomFadeContext.Provider value={{ currentlyZoomed, setCurrentlyZoomed }}>

        <Background image='../assets/images/koi.jpg' />

        <ProjectTableOfContents
          ripplerRef={ripplerRef}
          lavaRef={lavaRef}
          calendarRef={calendarRef}
          bartenderRef={bartenderRef}
          informRef={informRef}
          parabubRef={parabubRef}
          readmeRef={readmeRef}
          mernTemplateRef={mernTemplateRef}
          newsRef={newsRef}
          financeRef={financeRef}
          hamRef={hamRef}
          journalRef={journalRef}
          chessRef={chessRef}
          empFinderRef={empFinderRef}
          managerRef={managerRef}
          trekRef={trekRef}
          quizRef={quizRef}
          weatherRef={weatherRef}
          noteRef={noteRef}
          passRef={passRef}
          templateRef={templateRef}
          workdayRef={workdayRef}
          balanceRef={balanceRef}
          connectRef={connectRef}
          flaskJournalRef={flaskJournalRef}
          aimhiRef={aimhiRef}
        />

        {/* Main project card container */}
        <main className='container-fluid bottom-space project-container'>

          <section className='cont-row row card-gutters'>
            <Contributions />
          </section>

          <section className='row'>
            <div className='col-lg-12 card-gutters' id='color-rippler' ref={ripplerRef}>
              <div className='box-all box'>
                <div className="card">
                  <div className='row no-gutters'>
                    <div className='col-lg-6'>
                      <ZoomFadeIn diffZoomedImage={true}>
                        <img
                          id='rippler-img'
                          ref={ripplerImgRef}
                          onMouseOver={ripplerGif}
                          onMouseOut={restoreRippler}
                          src={require("../assets/images/color-rippler.PNG")}
                          alt="Color Rippler app"
                          smimg='true' />
                        <img src={require("../assets/images/color-rippler-2.PNG")} alt='color rippler app' lgimg='true' />
                      </ZoomFadeIn>
                    </div>
                    <div className='col-lg-6'>
                      <div className="card-body horizontal-card-body">
                        <h5 className="card-title">Color Rippler</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Color Art Grid</h6>
                        <p className="card-text horizontal-description">Generates a grid of colors. Click color boxes cause colors ripples!
                        This app takes advantage of the React framework to display and update a large number of components in a web browser.
                        An algorithm updates an array of colors, and an options page allows a hefty degree of customization.
                        Components are self-contained for easier portability.
                        </p>
                        <ul className='project-list horizontal-list'>
                          <li>
                            Get the source code on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/color-rippler" className="card-link"> GitHub</a>
                          </li>
                          <li>
                            <a target='_blank' rel="noopener noreferrer" href="https://color-rippler.herokuapp.com" className="card-link">Try it out!</a> Simply click on the grid.
                          </li>
                          <li>Watch me give a quick <a target='_blank' rel="noopener noreferrer" href='https://youtu.be/8EgwGFP_FDQ' className="card-link">YouTube demonstration</a> of the app</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>
            <div className='col-lg-12 card-gutters' id='aimhi' ref={aimhiRef}>
              <div className='box-all box'>
                <div className="card">
                  <div className='row no-gutters'>
                    <div className='col-lg-6'>
                      <ZoomFadeIn >
                        <img src={require('../assets/images/aimhi.PNG')} alt='Aim Hi Global Website' />
                      </ZoomFadeIn>
                    </div>
                    <div className='col-lg-6'>
                      <div className="card-body horizontal-card-body">
                        <h5 className="card-title">Aim-Hi Global</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Social Media Marketing Tool</h6>
                        <p className="card-text horizontal-description">This is a collaborative project with developers at Aim Hi Global, LLC.
                          The Aim Hi app seeks to help small businesses by allowing easy uploading of media for posting to multiple social media accounts,
                          including Facebook, Instagram, LinkedIn, and Twitter. The app allows the use of PayPal for subscription services,
                          and scheduling of social media posts using cloud scheduler functions.
                        </p>
                        <ul className='project-list horizontal-list'>
                          <li>
                            Visit the Aim-Hi Global <a target='_blank' rel="noopener noreferrer" href="https://aimhiglobal.com/posts" className="card-link">company website</a>!
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className='row'>

            <div className='col-lg-6 card-gutters' id='bartender' ref={bartenderRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn diffZoomedImage={true}>
                    <img
                      id='bar-img'
                      ref={barImgRef}
                      onMouseOver={barGif}
                      onMouseOut={restoreBar}
                      src={require("../assets/images/express-bartender.jpeg")}
                      alt="Express Bartender app"
                      smimg='true'
                    />
                    <img src={require("../assets/images/express-bartender.jpeg")} alt="Express Bartender app" lgimg='true' />
                  </ZoomFadeIn>
                  {/* <img src={require("../assets/images/express-bartender.png")} className="card-img-top" alt="Express Bartender app" onClick={bartenderZoom} /> */}
                  <div className="card-body">
                    <h5 className="card-title">Express Bartender</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User-focused experience, designed to provide drink info</h6>
                    <p className="card-text">Users can log in, search through a database of alcoholic and non-alcoholic drinks, and create and store their own recipes. User data is stored in a structured query library (SQL) database.
                    Among other technologies, the Node.js Express framework and the Sequelize library for SQL database management are heavily utilized. Above all, this project was a team effort.
                    I directed overall coding direction. I was also the main backend coder for database management and routing. I contributed to front-end polish as well.
                  </p>
                    <ul className='project-list'>
                      <li>
                        Check out the <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/Express-Bartender" className="card-link">GitHub </a>repository for a project summary
                    </li>
                      <li>
                        Express yourself on the <a target='_blank' rel="noopener noreferrer" href="https://team-express-bartender.herokuapp.com/" className="card-link">website</a>! The username 'kevin@kevin.com' and password '10Characters!' may be used in leiu of signing up.
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='inform-react' ref={informRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn diffZoomedImage={true}>
                    <img
                      onMouseOver={informGif}
                      onMouseOut={restoreInform}
                      src={require("../assets/images/inform.jpeg")}
                      alt="Inform and React app"
                      ref={informImgRef}
                      smimg='true'
                    />
                    <img src={require("../assets/images/inform.jpeg")} lgimg='true' alt="Inform and React app" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Inform and React</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Important Voter Information</h6>
                    <p className="card-text">This app was a team effort, programmed using the React framework and a Mongo database backend. I led the team in programming a majority of website routes and database functions.
                    I also programmed functionality for API calls. I contributed a significant amount of front-end design work as well. The app retrieves relevant voter information, based upon user details in the Mongo database.
                </p>
                    <ul className='project-list'>
                      <li>
                        See the <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/Inform-and-React" className="card-link">GitHub </a>repository and project summary
                    </li>
                      <li>
                        See the<a target='_blank' rel="noopener noreferrer" href="https://inform-react.herokuapp.com/" className="card-link"> deployed app</a>! The username 'vote' with password 'america' may be used in leiu of signing up.
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ section>

          <section className='row'>
            <div className='col-lg-12 card-gutters' id='para-bub' ref={parabubRef}>
              <div className='box-all box'>
                <div className="card">
                  <div className='row no-gutters'>
                    <div className='col-lg-6'>
                      <ZoomFadeIn diffZoomedImage={true}>
                        <img
                          id='para-img'
                          ref={paraImgRef}
                          onMouseOver={paraGif}
                          onMouseOut={restorePara}
                          src={require("../assets/images/para-bubbles.jpeg")}
                          alt="Parallaxed bubbles app"
                          smimg='true'
                        />
                        <img src={require("../assets/images/para-bubbles.jpeg")} lgimg='true' alt='Parallaxed Bubbles app' />
                      </ZoomFadeIn>
                    </div>
                    <div className='col-lg-6'>
                      <div className="card-body horizontal-card-body">
                        <h5 className="card-title">Para-bubbles</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Parallaxed Background Bubbles</h6>
                        <p className="card-text">A colorful background of bubbles that all scroll at different rates, for a neat parallax effect!
                        This app uses the react-spring package to demonstrate how a basic menu can be made much more interesting with a bit of simple animation. React also offers the advantage of easy component mapping and quick updating of the DOM.
                        Although similar animation effects are achievable with CSS, the react-spring package uses JavaScript for physics based, intuitive animation coding. As a bonus, simple API calls for searchable GIFs are possible!
                        </p>
                        <ul className='project-list'>
                          <li>
                            See the source code on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/para-bubbles" className="card-link"> GitHub</a>
                          </li>
                          <li>
                            Check out the <a target='_blank' rel="noopener noreferrer" href="https://para-bubbles.herokuapp.com" className="card-link">para-bubbles</a> demo! Scroll the page for animation, and perform simple customization with the options menu.
                        </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>
            <div className='col-lg-12 card-gutters' id='lava' ref={lavaRef}>
              <div className='box-all box'>
                <div className="card">
                  <div className='row no-gutters'>
                    <div className='col-lg-3'>
                      <ZoomFadeIn diffZoomedImage={true}>
                        <img
                          id='lava-img'
                          ref={lavaImgRef}
                          onMouseOver={lavaGif}
                          onMouseOut={restoreLava}
                          src={require('../assets/images/lava-lamp.png')}
                          alt='animated lava lamp'
                          smimg='true'
                        />
                        <img src={require('../assets/images/lava-lamp.png')} lgimg='true' alt='customizable sass lava lamps' />
                      </ZoomFadeIn>
                    </div>
                    <div className='col-lg-9'>
                      <div className="card-body horizontal-card-body">
                        <h5 className="card-title">Customizable Sass Lava Lamps</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Animated Lava Lamps created with CSS</h6>
                        <p className="card-text horizontal-description">This project aims to demonstrate advantages of CSS pre-processing using Sass. Animated lava lamps are modeled using entirely CSS, with animation accomplished through CSS keyframes.
                        Sass is used help in the creation of complex CSS files, and in this project provides for easy customization of the lava lamps by distilling important CSS properties down to several key variables.
                        With this method, the animated lava lamps and accompanying HTML are easily portable to other website projects.
                        </p>
                        <ul className='project-list horizontal-list'>
                          <li>
                            Get the SCSS files and detailed documentation on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/lava-lamp-customizable-sass" className="card-link"> GitHub</a>
                          </li>
                          <li>
                            See a demonstration on the <a target='_blank' rel="noopener noreferrer" href="https://sass-lava-lamps.herokuapp.com" className="card-link">webpage</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>
            <div className='col-lg-6 card-gutters' id='readme-gen' ref={readmeRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn diffZoomedImage={true}>
                    <img src={require("../assets/images/readme-gen.PNG")} alt="A sample readme" smimg='true' />
                    <img src={require("../assets/images/readme-zoom.png")} alt="A sample readme" lgimg='true' />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Quick Readme Generator</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Practical development tool</h6>
                    <p className="card-text">Quickly and dynamically generates a basic readme, based upon user input from a terminal. Requires Node.js and Node Package Manager.
                    I personally use this program quite often, and I'm planning to add more features. As a scientist, I know the importance of good documentation.
                    I have my work cut out for me with programs and documents to write. This readme generator helps.
                </p>
                    <ul className='project-list'>
                      <li>
                        Download the program and see sample readmes on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/readme-generator" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        Quick<a target='_blank' rel="noopener noreferrer" href="https://youtu.be/G-kk2_u-25k" className="card-link"> YouTube</a> demonstration
                  </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='mern-template' ref={mernTemplateRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/login.PNG")} alt="A login page" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">MERN Redux Authentication Template</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Practical development template</h6>
                    <p className="card-text">
                      A template for quickly setting up user authentication and serialization, using the MERN technology stack. A Redux store is set up to provide user data to any front-end components.
                      This template is designed to be easily dropped into new React projects, with a Mongo database and Express routing back-end already set up. A simple project, but designed to be useful for the creation of other projects.
                </p>
                    <ul className='project-list'>
                      <li>
                        Download the template and see detailed instructions on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/mern-redux-auth-template" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        See a basic, minimal<a target='_blank' rel="noopener noreferrer" href="https://mern-redux-auth-template.herokuapp.com/" className="card-link"> example</a> of the template
                  </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <section className='row card-gutters'>

            <div className='col-lg-12' id='trek-app' ref={trekRef}>
              <div className='box-all box'>
                <div className="card">
                  <div className='row no-gutters'>
                    <div className='col-lg-5'>
                      <ZoomFadeIn diffZoomedImage={true}>
                        <img
                          src={require("../assets/images/trek.png")}
                          alt="TREK app"
                          ref={trekImgRef}
                          onMouseOver={trekGif}
                          onMouseOut={restoreTrek}
                          smimg='true'
                        />
                        <img src={require("../assets/images/trek.png")} lgimg='true' alt='trek app' />
                      </ZoomFadeIn>
                    </div>
                    <div className='col-lg-7'>
                      <div className="card-body horizontal-card-body">
                        <h5 className="card-title">TREK</h5>
                        <h6 className="card-subtitle mb-2 text-muted">An Outdoor Hiking and Adventure App</h6>
                        <p className="card-text horizontal-description">A collaborative project between several programmers. I performed lead script coding for this project, as well as organization on GitHub.
                        I coded all Google Maps Platform functions, in addition to helping out with multiple smaller contributions.
                          This app is designed to map out a days journey, from hiking to eating to home again.</p>
                        <ul className='project-list horizontal-list'>
                          <li>
                            See the code and project summary on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/Trek" className="card-link">GitHub</a>
                          </li>
                          <li>
                            Use the <a target='_blank' rel="noopener noreferrer" href="koldenblue.github.io/trek/" className="card-link">TREK app </a>to plan a day
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>

            <div className='col-lg-6 card-gutters' id='calendar' ref={calendarRef}>
              <div className='box-all box'>
                <div className="card">
                  <ZoomFadeIn diffZoomedImage={true}>
                    <img 
                      src={require('../assets/images/calendar.PNG')} 
                      alt='calendar app' 
                      ref={calendarImgRef}
                      onMouseOver={calendarGif}
                      onMouseOut={restoreCalendar}
                      smimg='true'
                    />
                    <img src={require('../assets/images/calendar.PNG')} lgimg='true' alt='calendar app' />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Calendar Event Keeper</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Keep track of events with a navigable interactive calendar</h6>
                    <p className="card-text">This calendar allows users to sign in and keep track of events on a calendar. Events, stored in a Mongo database, can be entered and saved on any calendar day.
                    Weeks of the calendar are rendered dynamically, using React and Redux. Sass is used to help easily make the app mobile-responsive. And of course, users may edit or delete calendar events as they wish.
                        </p>
                    <ul className='project-list'>
                      <li>
                        See the source code and detailed discussion on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/calendar" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        See the calendar at the <a target='_blank' rel="noopener noreferrer" href="https://weekly-event-calendar.herokuapp.com/" className="card-link">deployed website</a>!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='flask-finance' ref={financeRef}>
              <div className='box-all box'>
                <div className="card">
                  <ZoomFadeIn >
                    <img src={require('../assets/images/finance.PNG')} alt='finance app' />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Mock Stock Finance</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Make mock stock trades with a Flask App</h6>
                    <p className="card-text">This app makes use of a <a className="card-link" href='https://iexcloud.io/' target='_blank' rel="noopener noreferrer">stock quotes API</a> and lets users look up the latest stock prices.
                       Users are given a fake amount of money to start with, and may make mock stock trades. An SQL database, with the SQLAlchemy ORM, is used to keep track of transaction history.
                       Routing is accomplished through Python and Flask. The Jinja templating engine is used to present the HTML/CSS front end.
                        </p>
                    <ul className='project-list'>
                      <li>
                        Get the app on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/finance" className="card-link"> GitHub</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>

            <div className='col-lg-6 card-gutters' id='redux-journal' ref={journalRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn diffZoomedImage={true}>
                    <img
                      src={require("../assets/images/redux-journal.jpeg")}
                      alt="Redux Journal"
                      ref={journalImgRef}
                      onMouseOver={journalGif}
                      onMouseOut={restoreJournal}
                      smimg='true'
                    />
                    <img src={require("../assets/images/redux-journal.jpeg")} lgimg='true' alt='redux journal' />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Redux Journal</h5>
                    <h6 className="card-subtitle mb-2 text-muted">MERN stack journal - MongoDB, Express.js, React, Redux, and Node.js</h6>
                    <p className="card-text">An app that tracks user journal entries and moods. Features a light/dark theme toggle. This app utilizes React for front-end component design, and MongoDB to keep track of user journal entries.
                    The Redux library is used to keep track of front-end UI state changes, such as whether components should be light or dark themed.
                  </p>
                    <ul className='project-list'>
                      <li>
                        Read a detailed code discussion on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/redux-journal" className="card-link">GitHub</a>
                      </li>
                      <li>
                        Make a journal entry on the <a target='_blank' rel="noopener noreferrer" href="https://redux-journal.herokuapp.com/" className="card-link">website</a>!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='flask-journal' ref={flaskJournalRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/flask-journal.png")} alt='flask journal' />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Flask Journal</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Python and SQL journal - using Flask and SQLAlchemy libraries</h6>
                    <p className="card-text">An app that tracks user journal entries and moods. Programmed with similar features to the React app. However, this app
                    uses Flask for routing rather than React and Express. This app also uses a SQL relational database, rather than the non-relational MongoDB, to track journal entries.
                    Comparisons between the React app (which uses a virtual DOM) and this Flask app (using more traditional DOM loading) show that the React App has significantly improved performance and loading times.
                  </p>
                    <ul className='project-list'>
                      <li>
                        Read a detailed code discussion or download the program on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/flask-journal" className="card-link">GitHub</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>
            <div className='col-lg-6 card-gutters' id='hamburger-handlebars' ref={hamRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/hamburger.PNG")} alt="Hamburger Website" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Hamburger Handling</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Templated with Handlebars and demonstrates SQL database deployment on a server</h6>
                    <p className="card-text">A quick and simple website that stores burgers in an SQL (structured query library) database. "Devour" the burger to update the database.
                    The Express Handlebars view engine is used for quick webpage templating, and the Sequelize ORM (object-relational mapper) is used to query and manage the database.
                  </p>
                    <ul className='project-list'>
                      <li>
                        Ham it up on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/games-websites" className="card-link">GitHub</a>
                      </li>
                      <li>
                        Serve up some hamburgers on the <a target='_blank' rel="noopener noreferrer" href="https://hamburger-handlebars.herokuapp.com/" className="card-link">website</a>!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='news-react' ref={newsRef}>
              <div className='box-all box'>
                <div className="card">
                  <ZoomFadeIn >
                    <img src={require('../assets/images/news.PNG')} alt='news app' />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">News Search</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Top Headlines and Searchable News</h6>
                    <p className="card-text">This is a simple website that makes use of a <a className="card-link" href='https://newsapi.org/' target='_blank' rel="noopener noreferrer">News API</a> in order
                          to present users with up-to-date news. A simple search has been implemented as well. The app uses the React framework to present the front-end. Other techniques used include Express for back-end routing and
                          API calls, Redux, Sass, and Node.js.
                        </p>
                    <ul className='project-list'>
                      <li>
                        See the source code on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/news" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        See top headlines on the deployed <a target='_blank' rel="noopener noreferrer" href="https://news-react-search.herokuapp.com/" className="card-link">webpage</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className='row' >
            {/* no ref for the table of contents, since this should always be in the same row as python chess */}
            <div className='col-lg-6 card-gutters'>
              <div className='box-all box'>
                <div className="card">
                  <ZoomFadeIn>
                    <img src={require("../assets/images/chess-redux.png")} alt="Chess in a Browser" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Chess-JavaScript</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Programmed in JavaScript/HTML/CSS and React</h6>
                    <p className="card-text">Chess in a browser! Based on game logic from a Python program I wrote previously. The front end is functional and movement logic has been implemented. However, game loop, checkmate, and victory logic has not yet been implemented.
                    The challenge of this program is about taking existing code I wrote in Python, and porting it to React. The Redux framework is also used to provide global state.
                      </p>
                    <ul className='project-list'>
                      <li>
                        Chess on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/chess-redux" className="card-link">GitHub!</a>
                      </li>
                      <li>
                        Test out the program at the <a target='_blank' rel="noopener noreferrer" href="https://chess-redux.herokuapp.com/" className="card-link">deployed website</a>.
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='chess' ref={chessRef}>
              <div className='box-all box'>
                <div className="card">
                  <ZoomFadeIn>
                    <img src={require("../assets/images/chess.PNG")} alt="Chess in a Python Terminal" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Chess-Python</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Programmed in Python 3</h6>
                    <p className="card-text">Chess in a terminal! Programmed using object-oriented programming techniques in Python. The board and piece types are separated into classes, while a main script ties all logic together and runs the game loop.
                      </p>
                    <ul className='project-list'>
                      <li>
                        Chess on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/python-chess-game" className="card-link">GitHub! </a>Requires Python to function.
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='row' >
            <div className='col-lg-6 card-gutters' id='emp-dir' ref={empFinderRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/emp-finder.png")} alt="Mock Employee Directory" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Mock Employee Directory</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Search and Filter an employee directory, through the power of React!</h6>
                    <p className="card-text">Retrieves randomly generated employee through an API database, then displays each employee as an individual React component on a webpage. Search filter and sort functions are also available.
                    Since the search filter and sort functions are programmed using React, results are almost immediate and only individual employee components in the document object model (DOM) are updated. This is as opposed to rendering the page using traditional vanilla JavaScript,
                  in which the functionality would result in a reload of the DOM. This app demonstrates how the component-based React framework, utilizing a virtual DOM, can be used for performance, efficiency, and code organization advantages. </p>
                    <ul className='project-list'>
                      <li>
                        View an in-depth explanation on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/employee-directory" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        Hire some new employees and sort them on the <a target='_blank' rel="noopener noreferrer" href="https://koldenblue.github.io/employee-directory/" className="card-link">website!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='database-manager' ref={managerRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/database-manager.png")} alt="Database Manager" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Node Python SQL Database Manager</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Stores Employee Input in an SQL database</h6>
                    <p className="card-text">This project allows storage and retrieval of basic employee information from an SQL database, including names, salaries, titles, managers, and department information.
                    This program was designed to run using Node.js in a terminal, and heavily utilizes promise-based asynchronous programming and the Inquirer package from Node Package Manager.
                    Basic communication between the JavaScript program and a Python script is also demonstrated.
                  </p>
                    <ul className='project-list'>
                      <li>
                        View an in-depth explanation on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/Node-Python-SQL-Database-Manager" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://youtu.be/ZgNN19BSUyg" className="card-link">YouTube</a> Demonstration
                  </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className='row'>

            <div className='col-lg-6 card-gutters' id='quiz-template' ref={quizRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/quiz.png")} alt="Quiz" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Quiz Template</h5>
                    <h6 className="card-subtitle mb-2 text-muted">A JavaScript and HTML Quiz Template Package</h6>
                    <p className="card-text">This project is a simple HTML and JavaScript template for creating quizzes in a browser. The HTML is designed to be easy to incorporate into an existing website.
                    The quiz is largely run through DOM manipulation. Quiz questions and parameters can be edited in the JavaScript file.
            </p>
                    <ul className='project-list'>
                      <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/quiz-template" className="card-link">GitHub </a>repository and project summary
                  </li>
                      <li>
                        Take a short <a target='_blank' rel="noopener noreferrer" href="https://koldenblue.github.io/quiz-template/" className="card-link">JavaScript Quiz!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='weather-forecaster' ref={weatherRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/weather-forecaster.png")} alt="Weather forecast app" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Weather Forecasting app</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Find the weather in your city</h6>
                    <p className="card-text">Searches a weather database for the 5-day forecast of the weather in any city. Your previous searches are stored as well!
                    This app utilizes AJAX calls to the OpenWeather API in order to retrieve weather data, and local storage to store previous sessions.
                    </p>
                    <ul className='project-list'>
                      <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/weather-forecaster" className="card-link">GitHub </a>repository and project summary
                      </li>
                      <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://koldenblue.github.io/weather-forecaster/" className="card-link">Find the weather </a>in your city!
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </section>


          <section className='row'>
            <div className='col-lg-6 card-gutters' id='notetaker' ref={noteRef}>
              <div className='box-all box'>
                <div className="card">
                  <ZoomFadeIn>
                    <img src={require("../assets/images/notetaker.PNG")} alt="Note Taker App" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Express Note Taker</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Store and Retrieve Notes with an Express.js Server</h6>
                    <p className="card-text">An app designed to store and retrieve notes. Routing is performed using Express.js.
                    API functionality for storing and retrieving notes is also accomplished through Express routing. Notes are stored and read from a simple JSON file.
                         Since notes are stored and read from a single JSON file without user login functionality, any user can see all notes.</p>
                    <ul className='project-list'>
                      <li>
                        See the code and project summary on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/note-server" className="card-link">GitHub</a>
                      </li>
                      <li>
                        Write some notes on the <a target='_blank' rel="noopener noreferrer" href="https://fast-brook-96701.herokuapp.com/" className="card-link">website</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-lg-6 card-gutters' id='pass-gen' ref={passRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/pass-gen.jpeg")} alt="password generator" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Generates random passwords</h6>
                    <p className="card-text">A simple JavaScript program that generates a random password. The app has a front-end programmed in basic HTML and CSS.
                    Users may input password specifications, such as desired length and desired special characters.</p>
                    <ul className='project-list'>
                      <li>
                        See the webpage source code and discussion on<a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/password-generator" className="card-link"> GitHub</a>
                      </li>
                      <li>
                        Generate a password at the <a target='_blank' rel="noopener noreferrer" href="https://koldenblue.github.io/password-generator/" className="card-link">deployed website</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className='row'>

            <div className='col-lg-6 card-gutters' id='template-engine' ref={templateRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/template-engine.png")} alt="Templated Object Engine in Browser" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Templated Object Engine</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Object-oriented programming used to generate HTML templates</h6>
                    <p className="card-text"> Node.js, in a terminal interface, gets user input about a team of programming employees.
                    A mobile-responsive HTML page is then generated dynamically.
                    Object-oriented programming techniques include utilization of classes and subclasses, as well as organization of asynchronous functions.
                    The template could also be repurposed. Questions and employee objects could be changed to
              to generate an HTML template about anything - students, or books, or video games, for example.</p>
                    <ul className='project-list'>
                      <li>
                        <a target='_blank' rel="noopener noreferrer" href='https://github.com/Koldenblue/template-engine' className="card-link">GitHub </a>source code, runnable in a terminal
                    </li>
                      <li>
                        View a <a target='_blank' rel="noopener noreferrer" href='https://youtu.be/SdOaaAi9A-Q' className="card-link">YouTube</a> demonstration
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6 card-gutters' id='workday-scheduler' ref={workdayRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/work-day-scheduler.png")} alt="WorkDay Scheduler" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Workday Scheduler</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Stores notes on a local machine in the browser</h6>
                    <p className="card-text">A simple webpage that can store and retrieve notes, oriented around a 9am-5pm workday.
                    The page changes based on the current time, by using the moment.js library.
                    Utilizes the local storage feature of the browser to store notes, even after the browser is closed.
                  </p>
                    <ul className='project-list'>
                      <li>
                        Workday scheduler and project summary on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/work-day-scheduler" className="card-link">GitHub</a>
                      </li>
                      <li>
                        Save notes for a scheduled workday with the <a target='_blank' rel="noopener noreferrer" href="https://koldenblue.github.io/work-day-scheduler/" className="card-link">scheduler app</a>!
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className='row' id='balance-sheet' ref={balanceRef}>
            <div className='col-lg-6 card-gutters'>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/bal_sheet.jpg")} alt="Balance Sheet" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Balance Sheet reader</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Programmed in Python 3</h6>
                    <p className="card-text">A balance sheet reader, programmed to help company efficiency in reading large amounts of excel files.</p>
                    <ul className='project-list'>
                      <li>
                        Balance sheet reader on <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/balance-sheet-reader" className="card-link">GitHub!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className='col-lg-6 card-gutters' id='connect' ref={connectRef}>
              <div className='box-all box'>
                <div className="card" >
                  <ZoomFadeIn>
                    <img src={require("../assets/images/connect-4-react.PNG")} alt="Connect 4" />
                  </ZoomFadeIn>
                  <div className="card-body">
                    <h5 className="card-title">Connect 4</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Simple React Browser Game</h6>
                    <p className="card-text">The classic game of Connect 4 in a browser. I'd look forward to programming more complicated games as well, such as adventure games or strategy games.
                    This project focuses on using React components and algorithmic logic to present a simple interactive game.
                      This code is based on a program also written by me, originally written using vanilla JavaScript / jQuery and uploaded to<a target='_blank' rel="noopener noreferrer" href='"https://github.com/Koldenblue/games-websites"' className='psychic-link'> GitHub</a>.
                      The orginal page was <a target='_blank' rel="noopener noreferrer" href="https://koldenblue.github.io/games-websites/" className='psychic-link'>deployed using GitHub pages</a>.
                    </p>
                    <ul className='project-list'>
                      <li>
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Koldenblue/connect-4-react" className="card-link">GitHub </a>Source Code
                  </li>
                      <li>
                        Play <a target='_blank' rel="noopener noreferrer" href="https://connect-4-react.herokuapp.com/" className="card-link">Connect 4!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className='row bottom-card-gutter'>
            <div className='col-lg-12 card-gutters'>
              <div className='box-all box'>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">More Projects coming soon!</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Check back for updates!</h6>
                    <p className="card-text">I work in Javascript/CSS/HTML, Python 3, as well as C/C++!
                    My aim is to build websites for both personal and professional use.
                    I welcome programming challenges as learning opportunities. General utility programming makes for a good project.
                    I am also learning and programming game development for fun!
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </ZoomFadeContext.Provider>
    </>
  )
}

export default Portfolio;