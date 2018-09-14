import React from "react";
import PropTypes from "prop-types";
import { DrawElements } from "../../../constants";

class Shapes extends React.Component {
  static propType = {
    isMobile: PropTypes.boolean,
    setType: PropTypes.func,
  };

  renderShapesBar = () => {
    const { setType } = this.props;
    return (
      <div className="actionBar">
        <button type="button">Undo</button>
        <button type="button" onClick={() => setType(DrawElements.ARROW)}>
          Arrow
        </button>
        <button type="button" onClick={() => setType(DrawElements.LINE)}>
          Line
        </button>
        <button type="button" onClick={() => setType(DrawElements.RECTANGLE)}>
          Rectangle
        </button>
        <button type="button" onClick={() => setType(DrawElements.CIRCLE)}>
          Circle
        </button>
        <button type="button" onClick={() => setType(DrawElements.FREE_DRAWING)}>
          Free
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setType(DrawElements.TEXT_AREA)}>
          Text
        </button>
      </div>
    );
  };

  render() {
    const { isMobile } = this.props;
    return isMobile ? (
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
        <a className="navbar-brand" href="#">
          Fixed bottom
        </a>
      </nav>
    ) : (
      this.renderShapesBar()
    );
  }
}

export default Shapes;
