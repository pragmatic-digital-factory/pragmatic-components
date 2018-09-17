export class DrawElement {
  constructor(data) {
    const {
      id,
      type,
      color,
      startX,
      startY,
      strokeWidth,
      fontSize,
      currentX,
      currentY,
      currentVectorX,
      currentVectorY,
      cumulatedVector,
      width,
      height,
      draggable,
    } = data;
    this._id = id;
    this._type = type;
    this._color = color;
    this._startX = startX;
    this._startY = startY;
    this._strokeWidth = strokeWidth;
    this._fontSize = fontSize;
    this._currentX = currentX;
    this._currentY = currentY;
    this._currentVectorX = currentVectorX;
    this._currentVectorY = currentVectorY;
    this._cumulatedVector = cumulatedVector;
    this._width = width || 0;
    this._height = height || 0;
    this._draggable = draggable || true;
    // if (data) Object.assign(this, data);
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }
  get color() {
    return this._color;
  }
  get startX() {
    return this._startX;
  }
  get startY() {
    return this._startY;
  }
  get strokeWidth() {
    return this._strokeWidth;
  }
  get fontSize() {
    return this._fontSize;
  }
  get currentX() {
    return this._currentX;
  }
  get currentY() {
    return this._currentY;
  }
  get currentVectorX() {
    return this._currentVectorX;
  }

  get currentVectorY() {
    return this._currentVectorY;
  }
  get cumulatedVector() {
    return this._cumulatedVector;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get draggable() {
    return this._draggable;
  }

  set id(value) {
    return (this._id = value);
  }

  set type(value) {
    return (this._type = value);
  }
  set color(value) {
    return (this._color = value);
  }
  set startX(value) {
    return (this._startX = value);
  }
  set startY(value) {
    return (this._startY = value);
  }
  set strokeWidth(value) {
    return (this._strokeWidth = value);
  }
  set fontSize(value) {
    return (this._fontSize = value);
  }
  set currentX(value) {
    return (this._currentX = value);
  }
  set currentY(value) {
    return (this._currentY = value);
  }
  set currentVectorX(value) {
    return (this._currentVectorX = value);
  }

  set currentVectorY(value) {
    return (this._currentVectorY = value);
  }
  set cumulatedVector(value) {
    return (this._cumulatedVector = value);
  }
  set width(value) {
    return (this._width = value);
  }
  set height(value) {
    return (this._height = value);
  }
  set draggable(value) {
    return (this._draggable = value);
  }
}
