import React, { Component } from "react";
import GridContainer from "./components/GridContainer";
import TileContainer from "./components/TileContainer";
import GameManager from "./GameManager";
// import Up from "../assets/icons/up-arrow.svg";
require("../assets/main.scss");


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: new GameManager(4),
      themeValue: 'aqua'
    };
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
    this.onTop = this.onTop.bind(this);
    this.onBottom = this.onBottom.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  onLeft() {
    var manager = this.state.manager;
    manager.move(3);
    this.setState({
      manager: manager
    });
  }

  onRight() {
    var manager = this.state.manager;
    manager.move(1);
    this.setState({
      manager: manager
    });
  }

  onTop() {
    var manager = this.state.manager;
    manager.move(0);
    this.setState({
      manager: manager
    });
  }

  onBottom() {
    var manager = this.state.manager;
    manager.move(2);
    this.setState({
      manager: manager
    });
  }

  handleKeyDown(obs) {
    var keyname = obs.key;
    if(keyname == "ArrowDown") {
      this.onBottom();
    } else if(keyname == "ArrowUp") {
      this.onTop();
    } else if(keyname == "ArrowRight") {
      this.onRight();
    } else if(keyname == "ArrowLeft") {
      this.onLeft();
    }
  }

  changeTheme(event){
    this.setState({ themeValue: event.target.value});
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
  render() {
    return (
      <div>
        <div className="game-container">
          <GridContainer />
          <TileContainer board={this.state.manager.grid} themeValue={this.state.themeValue} />
        </div>

        <div className="button-div">
          <button className={'button-style'} onClick={this.onLeft.bind(this)}>
            LEFT
          </button>

          <button className={'button-style'} onClick={this.onRight.bind(this)}>
            RIGHT
          </button>

          <button className={'button-style'} onClick={this.onTop.bind(this)}>
            TOP
          </button>

          <button className={'button-style'} onClick={this.onBottom.bind(this)}>
            BOTTOM
          </button>

          <select
            className={'button-style'}
            placeholder={'Change Theme'}
            onChange={this.changeTheme.bind(this)}
            value={this.state.themeValue}>
            <option value="aqua">Aqua</option>
            <option value="numbers">Numbers</option>
            <option value="land">Land</option>
          </select>
        </div>
      </div>
    );
  }
}
