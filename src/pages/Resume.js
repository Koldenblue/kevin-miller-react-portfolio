import React from "react";
import Background from "../components/Background";

class Resume extends React.Component {
  render() {
    return (
      <>
        <Background image='../assets/images/beach-hut.jpg' />
        <main class="container nav-avoid bottom-space" id="resume-container">
          <iframe src={require("../assets/images/Kevin-Miller-Resume-FE-10-21-20.pdf")} id='resume-pdf'></iframe>
        </main>
      </>
    )
  }
}

export default Resume;