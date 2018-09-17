import React from "react";
import { Image } from "react-konva";

class ImageBackground extends React.Component {
  componentDidMount() {
    this.imgBackground.cache();
  }

  render() {
    const { image, width, height } = this.props;
    return (
      <Image
        image={image}
        x={0}
        y={0}
        width={image.width}
        height={image.height}
        // onMouseOver={onMouseOver}
        ref={node => {
          this.imgBackground = node;
        }}
        // filters={this.props.filters}
      />
    );
  }
}
export default ImageBackground;
