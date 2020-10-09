import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function SummaryTabs(props) {

  return (
    <Tabs defaultActiveKey="summary">
      <Tab eventKey="summary" title="Summary">
        <p className='tab-para'>
          Full-stack web developer with a PhD in chemistry from the University of California, Los Angeles (UCLA). 
          Experienced problem-solver and scientific researcher with major <a href='#/chemistry'>publications</a>. 
          Education in full-stack development from UCLA. 
          Technical skills include JavaScript, HTML, CSS, jQuery, Python, C/C++, responsive web design, and working with API databases. 
          I value ethics, integrity, and good business sense, having spent years as a business manager and scientist. 
          I have teaching experience as both a classroom teacher and group fitness leader, which lends itself to public speaking and teamwork skills. 
          Programming certifications include the UCLA extension coding bootcamp course and the Harvard edX online CS50 course. 
          My top aim is to contribute to a team which can aid me in improving my own coding skills. 
          I seek to be in a position where I can improve the lives of those around me, whether that be teammates or clients, in the real world or the digital world.
        </p>
      </Tab>

      <Tab eventKey="technicalSkills" title="Technical Skills">
        <ul className='tab-para'>
          <li>Main coding written in JavaScript/HTML/CSS for web applications</li>
          <li>Coding techniques include object-oriented programming, asynchronous function handling, Application Programming Interface (API) integration with apps, responsive web design, client-server communication, routing, interface design, and code testing</li>
          <li>Database work done with Structured Query Language (SQL) through MySQL and the Sequelize Object-Relational Mapper (ORM)</li>
          <li>MongoDB</li>
          <li>Handlebars</li>
          <li>React</li>
          <li>AJAX and APIs</li>
          <li>Non-relational database management through MongoDB</li>
          <li>Python and C/C++ programming accomplished through self-study and professional certification</li>
          <li>JavaScript libraries include Node.js, jQuery, Express, Bootstrap, and Handlebars, as well as various smaller packages found with Node Package Manager</li>
        </ul>
      </Tab>

      <Tab eventKey="about" title="About This Webpage">
      <p className='tab-para'>WHAT IS THE HEIGHT</p>

      </Tab>

      <Tab eventKey="projects" title="Projects">
      <p className='tab-para'>WHAT IS THE HEIGHT</p>

      </Tab>

      <Tab eventKey="contact" title="Contact">
        <p className='tab-para'>
        My prefered method of contact is through email, at {props.contact.email + props.contact.domain}. My cell phone may be reached at {props.contact.areaCode + props.contact.phone}. 
        </p>
      </Tab>
    </Tabs>
  )
}

export default SummaryTabs;