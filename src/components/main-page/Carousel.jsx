import React from 'react'

export const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        {/* {height:"88.7vh"}  */}
  <div className="carousel-inner" style={
    {
        height:"30vh"

    }
    }>
    <div className="carousel-item active h-100">
      <img src="/images/Jimmy_carousel-img-1.jpg" className="d-block w-100 h-100" alt="Jimmy carrusel 1" />
    </div>
    <div className="carousel-item h-100">
      <img src="/images/Jimmy_carousel-img-2.jpg" className="d-block w-100 h-100" alt="Jimmy carrusel 2" />
    </div>
    <div className="carousel-item h-100">
      <img src="/images/Jimmy_carousel-img-3.jpg" className="d-block w-100 h-100" alt="Jimmy carrusel 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
