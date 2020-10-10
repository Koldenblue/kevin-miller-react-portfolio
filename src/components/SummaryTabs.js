import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function SummaryTabs(props) {

  return (
    <Tabs defaultActiveKey="summary">
      <Tab eventKey="summary" title="Summary">
        <p className='tab-para'>
          Full-stack web developer with a PhD in chemistry from the University of California, Los Angeles (UCLA). 
          Experienced problem-solver and scientific researcher with major <a href='/chemistry'>publications</a>. 
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
        <div className='tab-para'>
          <h5>Full-stack Web Developer with emphasis MERN stack technologies (MongoDB, Express, React, and Node.js)</h5>
          <ul className='tab-para'>
            <li>JavaScript/HTML/CSS used as main coding languages for a variety of web applications</li>
            <li>Experience with established JavaScript libraries for streamlining web development, such as jQuery, Bootstrap, and Handlebars</li>
            <li>Database work with MongoDB, as well as the Mongoose Object Document Mapper (ODM) or mongo.js package, for non-relational database management</li>
            <li>Database work done with Structured Query Language (SQL) through MySQL and the Sequelize Object-Relational Mapper (ORM)</li>
            <li>Express framework for back-end route and database setup</li>
            <li>React framework for front-end design and routing</li>
            <li>Application Programming Interface (API) integration with apps</li>
            <li> responsive web design, client-server communication, and code testing</li>
            <li>AJAX calls for retrieving data from and interacting with APIs </li>
            <li>Coding techniques include object-oriented programming and asynchronous function handling</li>
            <li>Familiar with researching and implementing new technologies or libraries as needed - for example, implementation of the Moment.js library, or implementatioon of various smaller packages found with Node Package Manager, such as Inquirer</li>
            <li>Ability to quickyly learn additional programming languages - for example, Python and C/C++ programming accomplished through self-study and professional certification</li>
            <li>Handlebars templating engine</li>
            <li>GitHub for version control</li>
          </ul>
        </div>
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