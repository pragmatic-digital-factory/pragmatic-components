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
          <p>Glisser ou cliquer un fichier de type image</p>
        </Dropzone>
      </div>
    );
  }
}

export default DropItem;
