import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { DrawElements } from "../../../constants";

class Shapes extends React.Component {
  static propType = {
    isMobile: PropTypes.boolean,
    setType: PropTypes.func,
    undo: PropTypes.func,
    setDropZone: PropTypes.func,
    type: PropTypes.string,
  };

  renderShapesBar = () => {
    const { setType, undo, setDropZone, type } = this.props;
    return (
      <div className="ui icon menu">
        <a className={"item"} onClick={() => undo()}>
          <i className="undo icon" />
        </a>
        <a
          className={classnames("item", { active: type === DrawElements.ARROW })}
          onClick={() => setType(DrawElements.ARROW)}
        >
          <i className="arrow right icon" />
        </a>
        <a
          className={classnames("item", { active: type === DrawElements.LINE })}
          onClick={() => setType(DrawElements.LINE)}
        >
          <i className="minus icon" />
        </a>
        <a
          className={classnames("item", { active: type === DrawElements.CIRCLE })}
          onClick={() => setType(DrawElements.CIRCLE)}
        >
          <i className="circle outline icon" />
        </a>
        <a
          className={classnames("item", { active: type === DrawElements.RECTANGLE })}
          onClick={() => setType(DrawElements.RECTANGLE)}
        >
          <i className="square outline icon" />
        </a>
        <a
          className={classnames("item", { active: type === DrawElements.FREE_DRAWING })}
          onClick={() => setType(DrawElements.FREE_DRAWING)}
        >
          <i className="paint brush icon" />
        </a>
        <a
          className={classnames("item", { active: type === DrawElements.TEXT_AREA })}
          onClick={() => setType(DrawElements.TEXT_AREA)}
        >
          <i className="font icon" />
        </a>
        <a className="item" onClick={() => setDropZone()}>
          <i className="image outline icon" />
        </a>
      </div>
    );
  };

  render() {
    const { isMobile } = this.props;
    return isMobile ? <div>need to be designed</div> : this.renderShapesBar();
  }
}

export default Shapes;
