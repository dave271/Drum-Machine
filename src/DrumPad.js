import React from "react";

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handlekeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlekeydown);
  }

  handlekeydown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
