//Drum and Piano App
const drumPad = [
{
  keyCode: 81,
  key: "Q",
  id: "Heater-V1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  key: "W",
  id: "Heater-V2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  key: "E",
  id: "Heater-V3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  key: "A",
  id: "Heater-V4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  key: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  key: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  key: "Z",
  id: "Kick-n-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  key: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  key: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



const active = {
  boxShadow: "1px 1px 3px #f4f4f4",
  marginTop: 12,
  background: "linear-gradient(rgba(250, 250, 250, 0.6),transparent ,rgba(250, 250, 250, 0.6) )" };

const inactive = {
  marginTop: 15 };


class Pad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: inactive };

    this.playSound = this.playSound.bind(this);
    this.pressStyle = this.pressStyle.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
  }
  keyPress(event) {
    if (event.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  pressStyle() {
    if (this.state.style.marginTop === 12) {
      this.setState({
        style: inactive });

    } else
    {
      this.setState({
        style: active });

    }
  }

  playSound() {
    let pad = document.getElementById(this.props.keyName);
    pad.currentTime = 0;
    pad.play();
    this.pressStyle();
    setTimeout(() => this.pressStyle(), 100);
    this.props.displayDrum(this.props.clipId);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-pad", style: this.state.style, id: this.props.clipId, onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { className: "clip", id: this.props.keyName, src: this.props.clip }),
      this.props.keyName));


  }}



class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let pads = this.props.drumpad.map((pad, i, padArr) => {console.log(padArr[i].key);return /*#__PURE__*/(
        React.createElement(Pad, { keyName: padArr[i].key, keyCode: padArr[i].keyCode, clip: padArr[i].url, clipId: padArr[i].id, displayDrum: this.props.displayDrum }));
    });
    return /*#__PURE__*/React.createElement("div", { className: "mainPad" }, pads);
  }}



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "PlaceHolder",
      drum: drumPad };

    this.displayDrum = this.displayDrum.bind(this);
  }
  displayDrum(name) {
    this.setState({
      display: name });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(DrumPad, { drumpad: this.state.drum, displayDrum: this.displayDrum }))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById("musicalInstrument"));