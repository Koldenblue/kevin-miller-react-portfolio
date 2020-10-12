import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function SummaryTabs(props) {

  return (
    <Tabs defaultActiveKey="summary">
      <Tab eventKey="summary" title="Summary">
        <p className='tab-para'>
          Full-stack web developer with a PhD in chemistry from the University of California, Los Angeles (UCLA). 
          Education in full-stack development from UCLA.
          Experienced problem-solver and scientific researcher with seven major <a href='/chemistry'>scientific publications</a>. 
          Values ethics, integrity, and good business sense, having spent years as a business manager and scientist. 
          Extensive teaching experience stems from being both a classroom teacher and a group fitness leader, which lend themselves to public speaking and teamwork skills. 
          Programming certifications include the UCLA extension coding bootcamp course and the Harvard edX online CS50 course. 
          Top aim is to contribute to a team while continuously improving coding skills. 
          Seeks to improve the lives of both teammates and clients, whether that be in the real world or the digital world.
        </p>
      </Tab>

      <Tab eventKey="technicalSkills" title="Technical Skills">
        <div className='tab-para'>
          <h5>Full-stack Web Developer with emphasis on MERN stack technologies (MongoDB, Express, React, and Node.js)</h5>
          <ul className='tab-para'>
            <li>JavaScript/HTML/CSS used as main coding languages</li>
            <li>React framework for front-end design and routing</li>
            <li>Express framework for back-end route and database setup</li>
            <li>MongoDB for non-relational database management, as well as the Mongoose Object Document Mapper (ODM) or mongo.js package </li>
            <li>Structured Query Language (SQL) database work, through MySQL and the Sequelize Object-Relational Mapper (ORM)</li>
            <li>jQuery, Bootstrap, Handlebars, and other established JavaScript libraries for streamlining web development</li>
            <li>GitHub for version control</li>
            <li>Application Programming Interface (API) integration with apps</li>
            <li>Responsive web design, client-server communication, and code testing</li>
            <li>AJAX calls for retrieving data from and interacting with APIs </li>
            <li>Object-oriented programming and asynchronous function handling</li>
            <li>Researching and implementing new technologies or libraries as needed - for example, implementation of the Moment.js library or various small packages found with Node Package Manager, such as Inquirer</li>
            <li>Ability to quickly learn additional programming languages and techniques - for example, Python and C/C++ programming accomplished through self-study and professional certification</li>
          </ul>
        </div>
      </Tab>

      {/* <Tab eventKey="about" title="About This Webpage">
      <p className='tab-para'>WHAT IS THE HEIGHT</p>

      </Tab>

      <Tab eventKey="projects" title="Projects">
      <p className='tab-para'>WHAT IS THE HEIGHT</p>

      </Tab> */}

      <Tab eventKey="contact" title="Contact">
        <p className='tab-para'>
        My prefered method of contact is through email, at {props.contact.email + props.contact.domain}. My cell phone may be reached at {props.contact.areaCode + props.contact.phone}. 
        </p>
      </Tab>
    </Tabs>
  )
}

export default SummaryTabs;