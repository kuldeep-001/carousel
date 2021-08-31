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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



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

    
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 750 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 10
  },
  tablet: {
    breakpoint: { max: 750, min: 464 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30
  }
};



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter:0};
  }
  
  handleSlideSelect = () => {};
  Increment = ()=>{
    this.setState({
      counter: this.state.counter +1
    });
  }
  Decrement = ()=>{
    this.setState({
      counter: this.state.counter -1
    });
  }
    
    render(){
      
      const CustomRightArrow = ({ onClick }) => (
      <div className="arrow right" onClick={this.Increment} style={{top:"0"}}>
        <img src={rightarr}  onClick={onClick} />
        
        </div>
      );
      const CustomLeftArrow = ({ onClick }) => (
        <div className="arrow left" onClick={this.Decrement} style={{top:"0",marginRight:"40px"}}>
        <img src={leftarr}  onClick={onClick} />
        
        </div>
      );
      return ( 
        <div className="container">
        <div className="head">
        <div className="heading"><span>Hi Srinivasan</span></div>
        <div className="slidenum">
              {" "}        
              {this.state.counter+ 1} / {Math.ceil(cardinfo.length/4)}{" "}
        </div>
        <div  style={{ textAlign: "left"}}>        
        {/* <img className="arrow" src={rightarr} />
        <img src={leftarr} />          */}
                 
        </div>
        </div> 
    
    <Carousel
      swipeable={false}
      draggable={false}
      
      responsive={responsive}
      partialVisible={true}
      
      
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      
    >
    {cardinfo.map(Cards)}
    </Carousel>
    </div>
      );
}; 
};



// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);

//   }
//   state = { currentSlide: 0, counter:0};
//   next() {
//     if (this.state.counter + 1 < Math.ceil(cardinfo.length/4)){
//       this.slider.slickNext();
//       this.setState({
//         counter: this.state.counter + 1
//       });
      
//     }
    
    
//   }
//   previous() {
    
//     /*if (this.state.currentSlide == cardinfo.length-4){
//       this.slider.slickGoTo(0);
//     }
//     else {}*/
//     if (this.state.counter+1>1){
//     this.slider.slickPrev();
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   }
//   }
  
  

//  handleAfterChange = index => {
//     console.log("after change", index);
//     this.setState({
//       currentSlide: index
//     });
//   };
//   render() {
    
//     var settings = {
      
      
      
//       infinite: false,
//       slidesToShow: 4.1,
//       slidesToScroll: 4,
//       adaptiveHeight: true,
//       nextArrow: <SampleArrow />,
//       prevArrow: <SampleArrow />,
      
//       afterChange: this.handleAfterChange,
//       initialSlide: 0,
      
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 4.1,
//             slidesToScroll: 4,
            
//           }
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 4.1,
//             slidesToScroll: 4,
            
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
            
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1.1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//   <div className="container">
//     <div className="head">
//     <div className="heading"><span>Hi Srinivasan</span></div>
//     <div className="slidenum">
//           {" "}        
//           {this.state.counter+ 1} / {Math.ceil(cardinfo.length/4)}{" "}
//     </div>
//     <div className="arrow" style={{ textAlign: "left"}}>        
//           <img src={leftarr} onClick={this.previous} style={{marginRight:"8px"}}/>        
//           <img src={rightarr} onClick={this.next} />        
//     </div>
//     </div>
//   <React.StrictMode>
    
//   <Slider ref={c => (this.slider = c)} {...settings}>
//     {cardinfo.map(Cards)}
//     </Slider>
//   </React.StrictMode>
  
//   </div>
//   );
// }
// }

