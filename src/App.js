import React, { Component } from "react";
import Slider from "react-slick";
import img from "./image.png";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftarr from "./leftarrow.png";
import rightarr from "./rightarrow.png";
import Card from "./Card.js";
import cardinfo from "./Cardinfo.js";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
    
    
  );
}
function Cards(content) {
  let names=[img,img,img,img,img,img,img,img,img];
  let images = names[content.id-1];
  return (
    
    <Card
      imag={images}
      idx={content.id}
      key={content.id}
      
      category={content.category}
      info={content.info}
      description={content.description}
      expirees={content.expirees}
       />
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    if (this.state.currentSlide < cardinfo.length-1){
      this.slider.slickNext();
    }
    
  }
  previous() {
    
    /*if (this.state.currentSlide == cardinfo.length-4){
      this.slider.slickGoTo(0);
    }
    else {}*/
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
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <SampleArrow />,
      prevArrow: <SampleArrow />,
      
      afterChange: this.handleAfterChange,
      initialSlide: 0,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
  <div className="container">
    <div className="head">
    <div className="heading"><span>Hi Srinivasan</span></div>
    <div className="slidenum">
          {" "}
          
          {Math.ceil(this.state.currentSlide/settings.slidesToShow) + 1} / {Math.ceil(cardinfo.length/settings.slidesToShow)}{" "}
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
