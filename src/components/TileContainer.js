import React, { Component } from 'react';
import Tile from "./Tile";
import GridModel from "../GridModel";
import TileModel from "../TileModel";

export default class TileContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tile-container">
        {this.renderTiles(this.props.themeValue)}
      </div>
    );
  }

  renderTiles(themeValue) {
    var cells = [];

    // New tiles
    this.props.board.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell)
          cells.push(<Tile themeValue={themeValue} model={cell} merged={false} key={cell.key} />);
      });
    });

    return cells;
  }
}
