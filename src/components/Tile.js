import React, { Component } from 'react';
import names from 'classnames';
import { images } from "../assets/config";

export default class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: props.model
    };
  }

  getPositionClassName(p) {
    return `tile-position-${p.x+1}-${p.y+1}`;
  }

  render() {
    var mergers = [];
    var model = this.state.model;
    var position = { x: model.x, y: model.y };
    // var position = model.previousPosition || { x: model.x, y: model.y };

    var classes = names(
      'tile',
      `tile-${model.value}`,
      this.getPositionClassName(position),
      {
        'tile-super': model.value > 2048,
        'tile-merged': ! model.previousPosition && model.mergedFrom,
        'tile-new': ! model.previousPosition && ! model.mergedFrom
      },
    );

    return (
      <div>
        <div className={classes}>
          <div className="tile-inner">
            <div>
              {this.props.themeValue !== "numbers" ? <img alt={model.value} src={images[this.props.themeValue][model.value]} className={'image-tile'} /> : model.value }
            </div>
          </div>
        </div>
        {mergers}
      </div>
    );
  }
}
