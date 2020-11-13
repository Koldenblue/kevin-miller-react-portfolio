import React, { useEffect } from 'react';

export default function ProjectTableOfContents(props) {

  useEffect(() => {
    console.log(props.chessRef.current)
    props.chessRef.current.setAttribute('class', "col-lg-12 card-gutters in-view");
    console.log(props.chessRef.current)
  },[])

  return (<>
    <ul className='list-nav'>
      <h3 className='top-link'>Projects</h3>
      <li><a href='#color-rippler'>Color Rippler</a></li>
      <li><a href='#bartender'>Express Bartender</a></li>
      <li><a href='#inform-react'>Inform and React</a></li>
      <li><a href='#para-bub'>Para Bubbles</a></li>
      <li><a href='#readme-gen'>Readme Generator</a></li>
      <li><a href='#mern-template'>MERN-Redux Template</a></li>
      <li><a href='#hamburger-handlebars'>Hamburger Handlebars</a></li>
      <li><a href='#redux-journal'>Redux Journal</a></li>
      <li><a href='#chess'>Chess</a></li>
      <li><a href='#emp-dir'>Mock Employee Directory</a></li>
      <li><a href='#database-manager'>Database Manager</a></li>
      <li><a href='#trek-app'>Trek</a></li>
      <li><a href='#quiz-template'>Quiz Template</a></li>
      <li><a href='#weather-forecaster'>Weather Forecaster</a></li>
      <li><a href='#notetaker'>Note Taker</a></li>
      <li><a href='#pass-gen'>Password Generator</a></li>
      <li><a href='#template-engine'>Template Engine</a></li>
      <li><a href='#workday-scheduler'>Workday Scheduler</a></li>
      <li><a href='#balance-sheet'>Balance Sheet Reader</a></li>
      <li id='last-link'><a href='#connect'>Connect 4</a></li>
    </ul>
  </>)
}