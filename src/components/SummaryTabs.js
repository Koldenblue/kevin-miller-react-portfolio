import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SummaryTabs(props) {

  return (
    <Tabs defaultActiveKey="contact">
      <Tab eventKey="contact" title="Contact">
        <div className='tab-para'>
          <p>
            My preferred method of contact is through email, at <strong>{props.contact.email + props.contact.domain}</strong>. My cell phone may be reached at <strong>{props.contact.areaCode + props.contact.phone}</strong>.
        I can also be reached through my <a href='https://www.linkedin.com/in/kevin-miller-phd-1b197986/' target='_blank' rel="noopener noreferrer" className='psychic-link'>LinkedIn profile page</a>.
        </p>
          <p>Be sure to check out my <a href='/portfolio' className='psychic-link'>portfolio</a> of projects or to visit my <a href='https://github.com/Koldenblue' className='psychic-link'>GitHub profile</a>!</p>
        </div>
      </Tab>


      <Tab eventKey="summary" title="Summary">
        <div className='tab-para'>
          <h5>Continually working on projects - be sure to check out my <a href='/portfolio' className='psychic-link'>project portfolio</a> or my <a href='/resume' className='psychic-link'>resume</a>!</h5>
          <hr />
          <p>
            Full-stack web developer with a PhD in chemistry from the University of California, Los Angeles (UCLA).
            Education in full-stack development from UCLA. Programming certifications include continuing education, as well the UCLA extension coding bootcamp course and the Harvard edX online CS50 course.
            Experienced problem-solver and scientific researcher with seven major <a href='/chemistry' className='psychic-link'>scientific publications</a>.</p>
          <p>Values ethics, integrity, and good business sense, having spent years as a business manager and scientist.
            Extensive teaching experience stems from being both a classroom teacher and a group fitness leader, which lend themselves to public speaking and teamwork skills.</p>
          <p>
            Top aim is to contribute to a team while continuously improving coding skills.
            Seeks to improve the lives of both teammates and clients, whether that be in the real world or the digital world.</p>

        </div>
      </Tab>


      <Tab eventKey="recommendations" title="Recommendations">
        <div className='tab-para'>
          <h5>Visit my <a href='https://www.linkedin.com/in/kevin-miller-phd-1b197986/' target='_blank' rel="noopener noreferrer" className='psychic-link'>LinkedIn profile</a> for full recommendation details!</h5>
          <hr />
          <Accordion defaultActiveKey="0">
            <Card className='accordion-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} className='psychic-link' variant="link" eventKey="0">
                Wilson Lam, Frontend Developer at Omou
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Kevin was one of my brightest students during his tenure in bootcamp.
                   From early in the program, I noticed that Kevin had acclimated to the lessons and activities very quickly.
                    When he would come to office hours, he would always ask very insightful questions about the topic he was currently learning.
                     The way he analyzes each problem he comes across, is very thorough and methodical. He is able to view these problems from a high level and he is able to isolate and identify his problem and come up with a quick and swift solution to solve it. When he works in groups, I've observed him working well and helping his team-mates when they fall behind.
                   He elevates his team mates up and ensures that his team-mates understand the problem they have encountered.
                    Kevin is one of my brightest students I've had the pleasure to meet and any company would be lucky to have him. </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className='accordion-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} className='psychic-link' variant="link" eventKey="1">
                Kevin Fujimoto, MBA
            </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Kevin and I worked together on two projects during the UCLA Coding Bootcamp Program. 
                   His expertise in JavaScript, React, JQuery, Express, Node, and mySQL (just to name a few) are truly extraordinary. 
                    Kevin is a hard-working, inquisitive soul who is constantly seeking knowledge and solving complex problems, as evidenced by his persistent study of algorithms and the several applications and games that he has developed on his own time.  He was instrumental in the success projects due to both his front-end and back-end prowess.  In both projects, Kevin was willing to do any, and all, activities that would advance our project goals, including password authentication, API calls and routes, database configuration, and utilizing hover, parallax, animation effects to enhance our front-end functionality.  What sets Kevin apart from other developers that I have worked with in the past is his ability to communicate, collaborate, and sacrifice for his teammates.  In addition, he is also a brilliant teacher and mentor, as he always made himself available for anyone who needed assistance, and articulated his explanations and answers in a way that was kind-hearted, thorough, and easily digestible for all audiences. 
                   I highly recommend Dr. Miller and am certain that he will be a tremendous personable and technical addition to any Full-Stack Development team!</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className='accordion-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} className='psychic-link' variant="link" eventKey="2">
                Tim Hellman
            </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Kevin Miller was a fellow classmate of mine in the UCLA Full-Stack Web Development Bootcamp.
                    He has a mind like no other - incredibly bright and curious, but also patient and kind. 
                     From our time working on various projects together, we got to know each other and I got to see firsthand his skill in navigating through coding issues - always methodical, always precise, always patient. 
                       He was a person I could always learn from - he navigated around my mental stumbling blocks and patiently walked me and other classmates through them. 
                        More than most people I've worked with, Kevin values group morale  - I will miss those pep talks of his that picked us up in moments of doubt. 
                   A very bright guy with a very kind spirit, he will be a valued member of anyone's team! </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className='accordion-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} className='psychic-link' variant="link" eventKey="3">
                Anissa Shanks, EMBA, ACP
            </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>I highly recommend Kevin for any developer position. 
                  I can't say enough about how Kevin tirelessly helped myself and our project teams during Bootcamp.
                   He has a constant drive to learn and research new concepts and master them in a short timeframe. 
                   I could always count on Kevin to help me through roadblocks to achieve our desired project outcomes.
                   Always friendly and approachable, Kevin would be a fantastic addition to any team or organization and I hope to work with him in the future on projects outside of our Bootcamp!</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Tab>


      <Tab eventKey="technicalSkills" title="Technical Skills">
        <div className='tab-para'>
          <h5>Full-stack Web Developer with emphasis on MERN stack technologies (MongoDB, Express, React, and Node.js)</h5>
          <hr />
          <ul className='tab-para'>
            <li>JavaScript/HTML/CSS used as main coding languages, with Python as secondary language</li>
            <li>React framework for front-end design and routing</li>
            <li>Express framework for back-end route and database setup</li>
            <li>MongoDB for non-relational database management, as well as the Mongoose Object Document Mapper (ODM) or mongo.js package</li>
            <li>Structured Query Language (SQL) database work, through MySQL, SQLite, and the Sequelize and SQLAlchemy Object-Relational Mappers (ORM)</li>
            <li>jQuery, Bootstrap, Handlebars, Sass, and other established JavaScript libraries for streamlining web development</li>
            <li>Experience routing with Python, Flask, and Jiran</li>
            <li>GitHub for version control</li>
            <li>Application Programming Interface (API) integration with apps</li>
            <li>Responsive web design, client-server communication, and code testing</li>
            <li>AJAX calls for retrieving data from and interacting with APIs</li>
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

    </Tabs>
  )
}

export default SummaryTabs;