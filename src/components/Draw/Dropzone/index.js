import React from "react";
import Dropzone from "react-dropzone";

class DropItem extends React.Component {
  render() {
    const { setAcceptedFiles, setRejectedFiles } = this.props;
    return (
      <div className="dropzone-Wrapper">
        <Dropzone
          name={"sd-dropzone"}
          onDrop={(acceptedFiles, rejectedFiles) => {
            setAcceptedFiles(acceptedFiles);
            setRejectedFiles(rejectedFiles);
          }}
          multiple={false}
          className="dropzone"
          accept={"image/jpeg,image/jpg,image/png,image/tiff,image/gif"}
        >
          <div className={"info"}>
            <p>
              Drag and drop or Click here to add an image in the background<br />
              <i className={"icon upload"} />
            </p>
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default DropItem;
