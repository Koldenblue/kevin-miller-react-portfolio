import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";



class SummaryTabs extends React.Component {
  constructor(props) {
    super(props)
    state = {
      areaCode: '(310) ',
      phone: '562-4572',
      email: 'klmille',
      domain: '@gmail.com'
    }

  }

  render() {
  return (
    <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example">
      <Tab eventKey="summary" title="Summary">
        <p>
          Full-stack web developer with a PhD in chemistry from UC Los Angeles. 
          Experienced problem-solver and scientific researcher with major publications. 
          Education in full-stack development from UCLA. 
          Technical skills include JavaScript, HTML, CSS, jQuery, Python, C/C++, responsive web design, and working with API databases. 
          I value ethics, integrity, and good business sense, having spent years as a business manager and scientist. 
          I have teaching experience as both a classroom teacher and group fitness leader, which lends itself to public speaking and teamwork skills. 
          Certifications in programming include the UCLA extension coding bootcamp course (to be completed by October) and the Harvard edX online CS50 course (also to be completed by October). 
          My top aim is to contribute to a team which can aid me in improving my own coding skills. 
          I seek to be in a position where I can improve the lives of those around me, whether that be teammates or clients, in the real world or the digital world.
        </p>
      </Tab>

      <Tab eventKey="technicalSkills" title="Technical Skills">
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
      </Tab>

      <Tab eventKey="about" title="About This Webpage">
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
      </Tab>

      <Tab eventKey="projects" title="Projects">
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
        <p>WHAT IS THE HEIGHT</p>
      </Tab>

      <Tab eventKey="contact" title="Contact">
        <p>
        My prefered method of contact is through email, at {this.state.email + this.state.domain}. My cell phone may be reached at {this.state.areaCode + this.state.phone}. 
        </p>
      </Tab>
    </Tabs>
  )
  }
}

export default SummaryTabs;