export default class GridModel {
  constructor(size) {
    this.size = size;
    this.cells = this.empty();
  }

  empty() {
    var cells = [];

    for (var x = 0; x < this.size; x++) {
      var row = cells[x] = [];

      for (var y = 0; y < this.size; y++) {
        row.push(null);
      }
    }

    return cells;
  }

  randomAvailableCell () {
    var cells = this.availableCells();

    if (cells.length)
      return cells[Math.floor(Math.random() * cells.length)];
  }

  availableCells() {
    var cells = [];

    this.eachCell(function (x, y, tile) {
      if (!tile) {
        cells.push({ x: x, y: y });
      }
    });

    return cells;
  }

  eachCell(callback) {
    for (var x = 0; x < this.size; x++)
      for (var y = 0; y < this.size; y++)
        callback(x, y, this.cells[x][y]);
  }

  cellsAvailable() {
    return !!this.availableCells().length;
  }

  cellAvailable(cell) {
    return !this.cellOccupied(cell);
  }

  cellOccupied(cell) {
    return !!this.cellContent(cell);
  }

  cellContent(cell) {
    if (this.withinBounds(cell)) {
      return this.cells[cell.x][cell.y];
    } else {
      return null;
    }
  }

  // Inserts a tile at its position
  insertTile(tile) {
    this.cells[tile.x][tile.y] = tile;
  }

  removeTile(tile) {
    this.cells[tile.x][tile.y] = null;
  }

  withinBounds(position) {
    return position.x >= 0 && position.x < this.size &&
           position.y >= 0 && position.y < this.size;
  }
}
