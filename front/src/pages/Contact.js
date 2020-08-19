import React, { Component } from "react";
import "./Contact.css";

const SERVER = process.env.REACT_APP_SERVER_ADDRESS;

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        tel: "",
        subject: "",
        message: "",
      },
      nameValid: false,
      telValid: false,
      emailValid: false,
      subjectValid: false,
      messageValid: false,
      phone: "",
      contactData: [{ name: "", address: "", tel: "", email: "" }],
    };
  }
  // récupération des données de la table contact
  componentDidMount() {
    this.getContact();
  }

  getContact = () => {
    fetch(SERVER + "/api/contact", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ contactData: data });
      });
  };

  handleContactSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    let fieldValidationError = this.state.formErrors;
    fieldValidationError.name = this.state.nameValid ? "" : "*champs requis";
    fieldValidationError.email = this.state.emailValid
      ? ""
      : "email non valide";
    fieldValidationError.tel = this.state.telValid ? "" : "*champs requis";
    fieldValidationError.subject = this.state.subjectValid
      ? ""
      : "*champs requis";
    fieldValidationError.message = this.state.messageValid
      ? ""
      : "*champs requis";
    this.setState({ formErrors: fieldValidationError });
  };

  render() {
    const { name, tel, email, subject, message } = this.state;
    return (
      <>
        <div className="form-header-group">
          <div className="form-header">
            <h1>Poser une question, demander un devis</h1>
            <h4>
              Laissez-nous vos coordonnées et votre message, nous vous
              recontacterons dans les meilleurs délais
            </h4>

            <div className="form-coordos-img">
              <img src="/images/SOS.PNG" alt="" role="presentation" />

              <p className="form-coordos-address">
                <span>{this.state.contactData[0].name}</span>
                <br />
                {this.state.contactData[0].address}
                <br />
                {this.state.contactData[0].tel}
                <br />
                {this.state.contactData[0].email}
              </p>
            </div>
          </div>
        </div>

        <form className="form-container" onSubmit={this.handleContactSubmit}>
          <div className="form-inputs">
            <div className="form-name">
              <label htmlFor="name">
                Entrez votre nom{""}
                <span>{this.state.formErrors.name}</span>
              </label>
              <input
                type="text"
                className="form-control is-valid"
                value={name}
                name="name"
                onChange={this.handleChangeContact}
                required
                aria-label="veuillez compléter ce champs"
              />
            </div>
            <div className="form-email">
              <label htmlFor="email">
                Entrez votre adresse e-mail{""}
                <span>{this.state.formErrors.email}</span>
              </label>
              <input
                type="text"
                className="email-control is-valid"
                name="email"
                required
                aria-label="veuillez compléter ce champs"
                value={email}
                onChange={this.handleChangeContact}
              />
            </div>
            <div className="form-tel">
              <label htmlFor="tel">
                Entrez votre numéro de téléphone{""}
                <span>{this.state.formErrors.tel}</span>
              </label>
              <input
                type="text"
                className="tel-control is-valid"
                value={tel}
                name="tel"
                onChange={this.handleChangeContact}
                required
                aria-label="veuillez compléter ce champs"
              />
            </div>
          </div>
          {/* select pour motif message */}

          <div className="form-message">
            <select
              className="select-contact"
              name="contact-devis"
              id="contact-select"
              aria-label="cliquez pourchoisir un motif ci-dessous"
              value={subject}
              onChange={this.handleChangeContact}
            >
              <option
                value=""
                aria-label="cliquez pourchoisir un motif ci-dessous"
              >
                Choisir un motif
              </option>
              <option
                value="devis"
                aria-label="demande de devis aide à la personne"
              >
                Demande de devis aide à la personne
              </option>
              <option value="autre" aria-label="de demande de devis nettoyage">
                Demande de devis nettoyage ...
              </option>
              <option
                value="autre"
                aria-label="demande de devis petit bricolage,jardinage"
              >
                Demande de devis petit bricolage, jardin...
              </option>
              <option value="autre" aria-label="autre demande">
                Autre demande
              </option>
            </select>
            <span>{this.state.formErrors.email}</span>

            <textarea
              className="form-message-area"
              name="message"
              aria-label="écrivez votre message ici"
              value={message}
              onChange={this.handleChangeContact}
            >
              {""}Votre message ici ...
              <span>{this.state.formErrors.message}</span>
            </textarea>
            <button
              className="form-btn"
              type="submit"
              aria-label="cliquez pour envoyer"
            >
              Envoyer
            </button>
          </div>
        </form>
      </>
    );
  }
}
