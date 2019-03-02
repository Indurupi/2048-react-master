export default class TileModel {
  constructor(position, value) {
    TileModel.total += 1;

    this.x = position.x;
    this.y = position.y;
    this.value = value || 2;
    this.key = TileModel.total;

    this.previousPosition = null;
    this.mergedFrom = null;
  }

  savePosition() {
    this.previousPosition = {
      x: this.x,
      y: this.y
    };
  }

  updatePosition(position) {
    this.x = position.x;
    this.y = position.y;
  }

  static total = 0;
}
