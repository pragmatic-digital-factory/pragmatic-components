import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-konva";

class ImageBackground extends React.Component {
  static propTypes = {
    image: PropTypes.object,
  };

  componentDidMount() {
    this.imgBackground.cache();
  }

  render() {
    const { image } = this.props;
    return (
      <Image
        image={image}
        x={0}
        y={0}
        width={image.width}
        height={image.height}
        ref={node => {
          this.imgBackground = node;
        }}
        // filters={this.props.filters}
      />
    );
  }
}
export default ImageBackground;
