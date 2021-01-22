import React, { useEffect } from 'react';

export default function ProjectTableOfContents(props) {

  useEffect(() => {
    // console.log(props.chessRef.current)
    // props.chessRef.current.setAttribute('class', "col-lg-12 card-gutters in-view");
    // console.log(props.chessRef.current)
  },[])

  const smoothScroll = (event, ref) => {
    event.preventDefault();
    ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})
  }

  return (<>
    <ul className='list-nav'>
      <h3 className='top-link'>Projects</h3>
      <li><a href='#color-rippler' onClick={(event) => smoothScroll(event, props.ripplerRef)}>Color Rippler</a></li>
      <li><a href='#aimhi' onClick={(event) => smoothScroll(event, props.aimhiRef)}>Aim-Hi Global, LLC</a></li>
      <li><a href='#bartender' onClick={(event) => smoothScroll(event, props.bartenderRef)}>Express Bartender</a></li>
      <li><a href='#inform-react' onClick={(event) => smoothScroll(event, props.informRef)}>Inform and React</a></li>
      <li><a href='#para-bub' onClick={(event) => smoothScroll(event, props.parabubRef)}>Para Bubbles</a></li>
      <li><a href='#lava' onClick={(event) => smoothScroll(event, props.lavaRef)}>Customizable Sass Lava Lamps</a></li>
      <li><a href='#readme-gen' onClick={(event) => smoothScroll(event, props.readmeRef)}>Readme Generator</a></li>
      <li><a href='#mern-template' onClick={(event) => smoothScroll(event, props.mernTemplateRef)}>MERN-Redux Template</a></li>
      <li><a href='#trek-app' onClick={(event) => smoothScroll(event, props.trekRef)}>Trek</a></li>
      <li><a href='#calendar' onClick={(event) => smoothScroll(event, props.calendarRef)}>Calendar</a></li>
      <li><a href='#flask-finance' onClick={(event) => smoothScroll(event, props.financeRef)}>Mock Stock Finance</a></li>
      <li><a href='#redux-journal' onClick={(event) => smoothScroll(event, props.journalRef)}>Redux Journal</a></li>
      <li><a href='#flask-journal' onClick={(event) => smoothScroll(event, props.flaskJournalRef)}>Flask Journal</a></li>
      <li><a href='#hamburger-handlebars' onClick={(event) => smoothScroll(event, props.hamRef)}>Hamburger Handlebars</a></li>
      <li><a href='#news-react' onClick={(event) => smoothScroll(event, props.newsRef)}>News</a></li>
      <li><a href='#chess' onClick={(event) => smoothScroll(event, props.chessRef)}>Chess - JavaScript</a></li>
      <li><a href='#chess' onClick={(event) => smoothScroll(event, props.chessRef)}>Chess - Python</a></li>
      <li><a href='#emp-dir' onClick={(event) => smoothScroll(event, props.empFinderRef)}>Mock Employee Directory</a></li>
      <li><a href='#database-manager' onClick={(event) => smoothScroll(event, props.managerRef)}>Database Manager</a></li>
      <li><a href='#quiz-template' onClick={(event) => smoothScroll(event, props.quizRef)}>Quiz Template</a></li>
      <li><a href='#weather-forecaster' onClick={(event) => smoothScroll(event, props.weatherRef)}>Weather Forecaster</a></li>
      <li><a href='#notetaker' onClick={(event) => smoothScroll(event, props.noteRef)}>Note Taker</a></li>
      <li><a href='#pass-gen' onClick={(event) => smoothScroll(event, props.passRef)}>Password Generator</a></li>
      <li><a href='#template-engine' onClick={(event) => smoothScroll(event, props.templateRef)}>Template Engine</a></li>
      <li><a href='#workday-scheduler' onClick={(event) => smoothScroll(event, props.workdayRef)}>Workday Scheduler</a></li>
      <li><a href='#balance-sheet' onClick={(event) => smoothScroll(event, props.balanceRef)}>Balance Sheet Reader</a></li>
      <li id='last-link'><a href='#connect' onClick={(event) => smoothScroll(event, props.connectRef)}>Connect 4</a></li>
    </ul>
  </>)
}