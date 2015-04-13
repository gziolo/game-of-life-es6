# API Documentation

## World

The universe of the Game of Life.

---

### Constructor(columns, rows)
  *columns*  
  type: Integer  
  Number of the grid's columns.

  *rows*  
  type: Integer  
  Number of the grid's rows.

Generates two-dimensional orthogonal grid of square cells.

Example:
```js
var world = new GameOfLife.World(1, 1);
```

---

### .tick()

Generates new generation through transition using Game of Life's rules.

Example:

```js
world.tick();
```

---

### .getCoordinateAt(x, y)
  *x*  
  type: Integer  
  X coordinate of world.

  *y*  
  type: Integer  
  Y coordinate of world.

Gets world's (x, y) coordinate containing cell. 

Example:

```js
var coordinate = world.getCoordinateAt(1, 1);
```

## Coordinate
(x, y) coordinate from the World.

---

### .hasLiveCell()

Checks whether given (x, y) coordinate has live cell.

```js
var coordinate = world.getCoordinateAt(1, 1);
coordinate.hasLiveCell();
```
