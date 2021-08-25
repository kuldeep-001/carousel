import React from "react";
import wish from "./wish.png";
import red from "./redh.png";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="wish" onClick={this.handleClick}>{
        this.state.isToggleOn ? <img src={wish} alt="heart "/> : <img src={red} alt="heart "/>}
      </div>
      
    );
  }
}
export default Toggle;