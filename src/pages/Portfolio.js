import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import Image from 'react-bootstrap/Image'
const util = require("util");

function Portfolio() {
  const [bartender, setBartender] = useState('none');
  const [barOpacity, setBarOpacity] = useState(1);
  const [trek, setTrek] = useState('none');
  const [trekOpacity, setTrekOpacity] = useState(1)
  const [chess, setChess] = useState('none');
  const [chessOpacity, setChessOpacity] = useState(1)
  const [ham, setHam] = useState('none');
  const [hamOpacity, setHamOpacity] = useState(1)
  const [readme, setReadme] = useState('none');
  const [readmeOpacity, setReadmeOpacity] = useState(1)
  const [quiz, setQuiz] = useState('none');
  const [quizOpacity, setQuizOpacity] = useState(1)
  const [weather, setWeather] = useState('none');
  const [weatherOpacity, setWeatherOpacity] = useState(1)
  const [template, setTemplate] = useState('none');
  const [templateOpacity, setTemplateOpacity] = useState(1)
  const [work, setWork] = useState('none');
  const [workOpacity, setWorkOpacity] = useState(1)
  const [balance, setBalance] = useState('none');
  const [balanceOpacity, setBalanceOpacity] = useState(1)
  const [connect, setConnect] = useState('none');
  const [connectOpacity, setConnectOpacity] = useState(1)

  const styles = {
    card: {
      'width': '30rem'
    },
    bartenderImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: bartender,
      transition: 'opacity 1s',
      opacity: barOpacity
    },
    trekImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: trek,
      transition: 'opacity 1s',
      opacity: trekOpacity
    },
    chessImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: chess,
      transition: 'opacity 1s',
      opacity: chessOpacity
    },
    hamImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: ham,
      transition: 'opacity 1s',
      opacity: hamOpacity
    },
    readmeImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: readme,
      transition: 'opacity 1s',
      opacity: readmeOpacity
    },
    quizImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: quiz,
      transition: 'opacity 1s',
      opacity: quizOpacity
    },
    weatherImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: weather,
      transition: 'opacity 1s',
      opacity: weatherOpacity
    },
    templateImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: template,
      transition: 'opacity 1s',
      opacity: templateOpacity
    },
    workImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: work,
      transition: 'opacity 1s',
      opacity: workOpacity
    },
    balanceImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: balance,
      transition: 'opacity 1s',
      opacity: balanceOpacity
    },
    connectImg: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      display: connect,
      transition: 'opacity 1s',
      opacity: connectOpacity
    }
  
  
  
  }

  // ==================  Express bartender image functions 
  // the user may click anywhere on the window to run the imageFade function, to get rid of the image
  let bartenderZoom = () => {
    setBartender('block');
    setTimeout(() => {
      window.addEventListener("click", bartenderFade)
    }, 100)
  }

  // lets the image fade in upon a change in the display style from none to block
  useEffect(() => {
    if (barOpacity === 0) {
      setBarOpacity(1)
    }
    else {
      setBarOpacity(0)
    }
  }, [bartender])

  let bartenderFade = () => {
    setBartender('none');
    window.removeEventListener("click", bartenderFade);
  }


  // ================= Trek image functions
  let trekZoom = () => {
    setTrek('block');
    setTimeout(() => {
      window.addEventListener("click", trekFade)
    }, 100)
  }

  useEffect(() => {
    if (trekOpacity === 0) {
      setTrekOpacity(1)
    }
    else {
      setTrekOpacity(0)
    }
  }, [trek])

  let trekFade = () => {
    setTrek('none');
    window.removeEventListener("click", trekFade);
  }


  // ========== chess image functions
  let chessZoom = () => {
    setChess('block');
    setTimeout(() => {
      window.addEventListener("click", chessFade)
    }, 100)
  }

  useEffect(() => {
    if (chessOpacity === 0) {
      setChessOpacity(1)
    }
    else {
      setChessOpacity(0)
    }
  }, [chess])

  let chessFade = () => {
    setChess('none');
    window.removeEventListener("click", chessFade);
  }


  //================ hamburger image functions
  let hamZoom = () => {
    setHam('block');
    setTimeout(() => {
      window.addEventListener("click", hamFade)
    }, 100)
  }

  useEffect(() => {
    if (hamOpacity === 0) {
      setHamOpacity(1)
    }
    else {
      setHamOpacity(0)
    }
  }, [ham])

  let hamFade = () => {
    setHam('none');
    window.removeEventListener("click", hamFade);
  }


  //================ readme image functions
  let readmeZoom = () => {
    setReadme('block');
    setTimeout(() => {
      window.addEventListener("click", readmeFade)
    }, 100)
  }

  useEffect(() => {
    if (readmeOpacity === 0) {
      setReadmeOpacity(1)
    }
    else {
      setReadmeOpacity(0)
    }
  }, [readme])

  let readmeFade = () => {
    setReadme('none');
    window.removeEventListener("click", readmeFade);
  }


  //================ quiz image functions
  let quizZoom = () => {
    setQuiz('block');
    setTimeout(() => {
      window.addEventListener("click", quizFade)
    }, 100)
  }

  useEffect(() => {
    if (quizOpacity === 0) {
      setQuizOpacity(1)
    }
    else {
      setQuizOpacity(0)
    }
  }, [quiz])

  let quizFade = () => {
    setQuiz('none');
    window.removeEventListener("click", quizFade);
  }

  //================ weather image functions
  let weatherZoom = () => {
    setWeather('block');
    setTimeout(() => {
      window.addEventListener("click", weatherFade)
    }, 100)
  }

  useEffect(() => {
    if (weatherOpacity === 0) {
      setWeatherOpacity(1)
    }
    else {
      setWeatherOpacity(0)
    }
  }, [weather])

  let weatherFade = () => {
    setWeather('none');
    window.removeEventListener("click", weatherFade);
  }


  //================ template image functions
  let templateZoom = () => {
    setTemplate('block');
    setTimeout(() => {
      window.addEventListener("click", templateFade)
    }, 100)
  }

  useEffect(() => {
    if (templateOpacity === 0) {
      setTemplateOpacity(1)
    }
    else {
      setTemplateOpacity(0)
    }
  }, [template])

  let templateFade = () => {
    setTemplate('none');
    window.removeEventListener("click", templateFade);
  }


  //================ work image functions
  let workZoom = () => {
    setWork('block');
    setTimeout(() => {
      window.addEventListener("click", workFade)
    }, 100)
  }

  useEffect(() => {
    if (workOpacity === 0) {
      setWorkOpacity(1)
    }
    else {
      setWorkOpacity(0)
    }
  }, [work])

  let workFade = () => {
    setWork('none');
    window.removeEventListener("click", workFade);
  }


  //================ balance image functions
  let balanceZoom = () => {
    setBalance('block');
    setTimeout(() => {
      window.addEventListener("click", balanceFade)
    }, 100)
  }

  useEffect(() => {
    if (balanceOpacity === 0) {
      setBalanceOpacity(1)
    }
    else {
      setBalanceOpacity(0)
    }
  }, [balance])

  let balanceFade = () => {
    setBalance('none');
    window.removeEventListener("click", balanceFade);
  }


  //================ connect image functions
  let connectZoom = () => {
    setConnect('block');
    setTimeout(() => {
      window.addEventListener("click", connectFade)
    }, 100)
  }

  useEffect(() => {
    if (connectOpacity === 0) {
      setConnectOpacity(1)
    }
    else {
      setConnectOpacity(0)
    }
  }, [connect])

  let connectFade = () => {
    setConnect('none');
    window.removeEventListener("click", connectFade);
  }



  return (
    <>
      <Background image='../assets/images/koi.jpg' />

      {/* Zoomed images */}
      <img src={require('../assets/images/express-bartender.png')} style={styles.bartenderImg} />
      <img src={require("../assets/images/trek.png")} style={styles.trekImg} />
      <img src={require("../assets/images/chess.PNG")} style={styles.chessImg} />
      <img src={require("../assets/images/hamburger.PNG")} style={styles.hamImg} />
      <img src={require("../assets/images/readme-gen.jpeg")} style={styles.readmeImg} />
      <img src={require("../assets/images/quiz.png")} style={styles.quizImg} />
      <img src={require("../assets/images/weather-forecaster.png")} style={styles.weatherImg} />
      <img src={require("../assets/images/template-engine.png")} style={styles.templateImg} />
      <img src={require("../assets/images/work-day-scheduler.png")} style={styles.workImg} />
      <img src={require("../assets/images/bal_sheet.jpg")} style={styles.balanceImg} />
      <img src={require("../assets/images/connect-4.PNG")} style={styles.connectImg} />

      
      <main className='container nav-avoid bottom-space'>

        <section className='row'>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/express-bartender.png")} className="card-img-top" alt="Express Bartender app" onClick={bartenderZoom}/>
                <div className="card-body">
                  <h5 className="card-title">Express Bartender</h5>
                  <h6 className="card-subtitle mb-2 text-muted">User-focused experience, designed to provide drink info</h6>
                  <p className="card-text">Users can log in, search through a database of alcoholic and non-alcoholic drinks, and create and store their own recipes. User data is stored in a structured query library (SQL) database.
                  Among other technologies, the Node.js Express framework and the Sequelize library for SQL database management are heavily utilized. Above all, this project was a team effort. It really came together excellently as a result of our teamwork.
                  I directed overall coding direction. I was also the main backend coder for database management and routing.
            </p>
                  <a href="https://team-express-bartender.herokuapp.com/" className="card-link">Express yourself on the website! Signup is free and no-strings-attached.</a>
                  <br />
                  <a href="https://github.com/FuDoggy/project2" className="card-link">View the project summary and source <code></code> on GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/trek.png")} className="card-img-top" alt="TREK app" onClick={trekZoom}/>
                <div className="card-body">
                  <h5 className="card-title">TREK</h5>
                  <h6 className="card-subtitle mb-2 text-muted">An Outdoor Hiking and Adventure App</h6>
                  <p className="card-text">A collaborative project between several programmers. I performed lead script coding for this project, as well as organization on GitHub.
                  I coded all Google Maps Platform functions, in addition to helping out with multiple smaller contributions.
                This app is designed to map out a days journey, from hiking to eating to home again.</p>
                  <a href="koldenblue.github.io/trek/" className="card-link">Use the TREK app to plan a day</a>
                  <br />
                  <a href="https://github.com/Koldenblue/Trek" className="card-link">See the code on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </ section>

        <section className='row card-gutters'>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/chess.PNG")} className="card-img-top" alt="Chess in a Python Terminal" onClick={chessZoom}/>
                <div className="card-body">
                  <h5 className="card-title">Chess</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Programmed in Python 3</h6>
                  <p className="card-text">Chess in a terminal! Programmed using object-oriented programming techniques in Python.
                  Future plans for this program include exporting it to run in a browser.
            </p>
                  <a href="https://github.com/Koldenblue/python-chess-game" className="card-link">Chess on GitHub! Requires Python to function.</a>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/hamburger.PNG")} className="card-img-top" alt="Hamburger Website" onClick={hamZoom}/>
                <div className="card-body">
                  <h5 className="card-title">Hamburger Handling</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Templated with Handlebars and demonstrates SQL database deployment on a server</h6>
                  <p className="card-text">A quick and simple website that stores burgers in an SQL (structured query library) database. "Devour" the burger to update the database.
                  The Express Handlebars view engine is used for quick webpage templating, and the Sequelize ORM (object-relational mapper) is used to query and manage the database.
            </p>
                  <a href="https://hamburger-handlebars.herokuapp.com/" className="card-link">Serve up some hamburgers!</a>
                  <br />
                  <a href="https://github.com/Koldenblue/games-websites" className="card-link">Ham it up on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='row card-gutters'>
          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
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

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/readme-gen.jpeg")} className="card-img-top" alt="A sample readme" onClick={readmeZoom} />
                <div className="card-body">
                  <h5 className="card-title">Quick Readme Generator</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Practical development tool</h6>
                  <p className="card-text">Quickly generates a basic readme, based upon user input from a terminal. Requires Node.js and Node Package Manager.
                  I personally find this useful, and I'm planning to add more features. As a scientist, I know the importance of good documentation.
                  I have my work cut out for me with programs and documents to write. This readme generator helps.
            </p>
                  <a href="https://youtu.be/G-kk2_u-25k" className="card-link">Quick YouTube demonstration - updates pending on this</a>
                  <a href="https://github.com/Koldenblue/readme-generator" className="card-link">See the program and sample readmes on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='row card-gutters'>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/quiz.png")} className="card-img-top" alt="Quiz" onClick={quizZoom} />
                <div className="card-body">
                  <h5 className="card-title">Quiz Template</h5>
                  <h6 className="card-subtitle mb-2 text-muted">A JavaScript and HTML Quiz Template Package</h6>
                  <p className="card-text">This project is a simple HTML and JavaScript template for creating quizzes in a browser. The HTML is designed to be easy to incorporate into an existing website.
                  The quiz is largely run through DOM manipulation. Quiz questions and parameters can be edited in the JavaScript file.
            </p>
                  <a href="https://koldenblue.github.io/quiz-template/" className="card-link">Take a short JavaScript Quiz!</a>
                  <br />
                  <a href="https://github.com/Koldenblue/quiz-template" className="card-link">Quiz Template Code on GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/weather-forecaster.png")} className="card-img-top" alt="Weather forecast app" onClick={weatherZoom} />
                <div className="card-body">
                  <h5 className="card-title">Weather Forecasting app</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Find the weather in your city</h6>
                  <p className="card-text">Searches a weather database for the 5-day forecast of the weather in any city. Your previous searches are stored as well!
                  This app utilizes AJAX calls to the OpenWeather API in order to retrieve weather data, and local storage to store previous sessions.
            </p>
                  <a href="https://koldenblue.github.io/weather-forecaster/" className="card-link">Find the weather in your city!</a>
                  <br />
                  <a href="https://github.com/Koldenblue/weather-forecaster" className="card-link">Weather Forecaster on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='row card-gutters'>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/template-engine.png")} className="card-img-top" alt="Templated Object Engine in Browser" onClick={templateZoom}/>
                <div className="card-body">
                  <h5 className="card-title">Templated Object Engine</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Object-oriented programming used to generate HTML templates</h6>
                  <p className="card-text"> Node.js, in a terminal interface, gets user input about a team of programming employees.
                  A mobile-responsive HTML page is then generated dynamically.
                  Object-oriented programming techniques include utilization of classNamees and subclassNamees, as well as ordering of asynchronous functions.
                  The template could also be repurposed. Questions and employee objects could be changed to
              to generate an HTML template about anything - students, or books, or video games, for example.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/work-day-scheduler.png")} className="card-img-top" alt="WorkDay Scheduler" onClick={workZoom}/>
                <div className="card-body">
                  <h5 className="card-title">Workday Scheduler</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Stores notes on a local machine in the browser</h6>
                  <p className="card-text">A simple webpage that can store and retrieve notes, oriented around a 9am-5pm workday. The page changes based
                  on the current time, by using the moment.js library.
                  Utilizes the local storage feature of the browser to store notes, even after the browser is closed.
            </p>
                  <a href="https://koldenblue.github.io/work-day-scheduler/" className="card-link">Save notes for a scheduled workday!</a>
                  <a href="https://github.com/Koldenblue/work-day-scheduler" className="card-link">Workday scheduler on GitHub</a>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className='row card-gutters bottom-card-gutter' >
          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/bal_sheet.jpg")} className="card-img-top" alt="Balance Sheet" onClick={balanceZoom} />
                <div className="card-body">
                  <h5 className="card-title">Balance Sheet reader</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Programmed in Python 3</h6>
                  <p className="card-text">A balance sheet reader, programmed to help company efficiency in reading large amounts of excel files.</p>
                  <a href="https://github.com/Koldenblue/balance-sheet-reader" className="card-link">Balance sheet reader on GitHub!</a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='box-all box'>
              <div className="card" style={styles.card}>
                <img src={require("../assets/images/connect-4.PNG")} className="card-img-top" alt="Connect 4" onClick={connectZoom} />
                <div className="card-body">
                  <h5 className="card-title">Connect 4 in JavaScript</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Simple Browser Games</h6>
                  <p className="card-text">The classic game of Connect 4 in a browser. This one is a work in progress, but I'm enjoying working on making some browser games.
              I'd actually like to program more complicated games as well, such as adventure games or strategy games.</p>
                  <a href="https://koldenblue.github.io/games-websites/" className="card-link">Play Connect 4!</a>
                  <br />
                  <a href="https://github.com/Koldenblue/games-websites" className="card-link">View Browser Games on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Portfolio;