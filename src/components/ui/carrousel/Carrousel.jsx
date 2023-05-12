import React from "react";
function Carrousel(props) {
  
  return (
    <div  style={{width:"200px", textAlign:"center"}} id={`carouselExampleAutoplaying${props.idDife}`} class={`carousel ${props.dark?"carousel-dark":""} slide`} data-bs-ride="carousel">
    <div class="carousel-indicators">
      {props.bestProducts?props.bestProducts.map((data,index)=>
          <button type="button" data-bs-target={`#carouselExampleAutoplaying${props.idDife}`} data-bs-slide-to={index} class={`${index===0?"active":""}`} aria-current={`${index===0?"true":"false"}`} aria-label={`Slide ${index+1}`}></button>
      ):null}
      {/* <button type="button" data-bs-target={`#carouselExampleAutoplaying${props.idDife}`}  data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target={`#carouselExampleAutoplaying${props.idDife}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target={`#carouselExampleAutoplaying${props.idDife}`} data-bs-slide-to="2" aria-label="Slide 3"></button> */}
    </div>
    <div class="carousel-inner">
      {props.bestProducts?props.bestProducts.map((data,index)=>
      <div class={`carousel-item ${index===0?"active":""}`}>
        <img src={data.image} style={{width:"200px"}} class="d-block" alt="..." />
      </div>):null}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleAutoplaying${props.idDife}`} data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleAutoplaying${props.idDife}`} data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Carrousel;
