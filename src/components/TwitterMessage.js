import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* sets state of message as its being input (onChange) */}
        <input type="text" onChange={ event => this.setState({message: event.target.value})} value={this.state.message} />
        {/* takes default value of maxChars and subtracts current state of message from default value */}
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
