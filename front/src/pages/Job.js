import React, { Component } from "react";
import "./Job.css";
import UploadFile from "../components/UploadFile";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.name);
    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <>
        <div className="job-container">
          <header className="job-header">
            <h1>Vous souhaitez rejoindre nos équipes ?</h1>
            <h2>Nous recrutons actuellement :</h2>
            <ul>
              <li>auxilliaires de vie</li>
              <li>yghsdfui</li>
              <li>sdhfqsiju</li>
            </ul>
          </header>
          {/* form */}

          <form className="job-container-form">
            {/*  */}
            <div className="job-name-container">
              <div className="job-form-name">
                <label htmlFor="name">Entrez votre nom</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom Prénom"
                  required
                  aria-label="veuillez compléter ce champs"
                  onChange={this.handleChange}
                />
                <div className="job-form-import__cv">
                  <p>Importez ici votre CV</p>
                  <UploadFile />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="job-message-submit">
              <div className="job-form-message">
                <h4>Votre message</h4>
                <textarea
                  className="text-message"
                  name="message"
                  aria-label="écrivez votre message ici"
                  placeholder=" votre message..."
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
          </form>
          <div className="job-send">
            <button
              className="job-form-message-btn"
              type="submit"
              aria-label="cliquez pour envoyer"
            >
              Envoyer
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Job;
