import React, { Component } from "react";
import Slider from "react-slick";

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftarr from "./leftarrow.png";
import rightarr from "./rightarrow.png";
import Card from "./Card.js";
import cardinfo from "./Cardinfo.js";

/*function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
    
    
  );
}*/
function Cards(content) {
  return (
    
    <Card
      img={content.image}
      category={content.category}
      info={content.info}
      description={content.description}
      expirees={content.expirees} />
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  state = { currentSlide: 0 };

 handleAfterChange = index => {
    console.log("after change", index);
    this.setState({
      currentSlide: index
    });
  };
  render() {

    const settings = {
      className: "slider variable-width",
      
      
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      afterChange: this.handleAfterChange
    };
    return (
  <div className="container">
    <div className="head">
    <div className="heading"><span>Hi Srinivasan</span></div>
    <div className="slidenum">
          {" "}
          {this.state.currentSlide + 1} / {cardinfo.length-3}{" "}
    </div>
    <div className="arrow" style={{ textAlign: "right"}}>
          
          <img src={leftarr} onClick={this.previous} style={{marginRight:"8px"}}/>
          
          <img src={rightarr} onClick={this.next} />
          
    </div>
    </div>
  <React.StrictMode>
    
  <Slider ref={c => (this.slider = c)} {...settings}>
    {cardinfo.map(Cards)}
    </Slider>
  </React.StrictMode>
  
  </div>
  );
}
}