import React, { Component } from "react";
// import "./pages/Job.css";

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFileImages: null,
      loaded: false,
    };
  }

  //   input methods
  onChangeHandler = (e) => {
    this.setState({
      selectFileImages: e.target.files[0],
      loaded: false,
    });
  };

  render() {
    return (
      <>
        <div className="upload-cv">
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <button className="upload-btn">Télécharger</button>
        </div>
      </>
    );
  }
}
