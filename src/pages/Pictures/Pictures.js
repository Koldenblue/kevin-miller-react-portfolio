import React from "react";

class Pictures extends React.Component {
  render() {
    return(
      <main id="carousel-box" class='bottom-space'>
      <div class="nav-avoid container-lg">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/guitar3.jpg" class="d-block w-100" alt="Playing the Bass" id='bass' />
            </div>
            <div class="carousel-item">
              <img src="assets/saskia2.JPG" class="d-block w-100" alt="Me and my dog, Saskia" id='saskia' />
            </div>
            <div class="carousel-item">
              <img src="assets/self2.jpg" class="d-block w-100" alt="A picture of me" id='self' />
            </div>

          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </main>
    )
  }
}

export default Pictures;