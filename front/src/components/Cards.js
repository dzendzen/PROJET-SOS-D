import React, { Component } from "react";
import "./Cards.css";
import { FaPlus } from "react-icons/fa";
import Job from "../pages/Job";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Modal from "react-modal";

export default class Cards extends Component {
  state = {
    modalAboutIsOpen: false,
    modalContactsIsOpen: false,
    modalJobIsOpen: false,
    modalGalleryIsOpen: false,
  };
  showModalAbout = () => {
    this.setState({ modalAboutIsOpen: true });
  };
  hideModalAbout = () => {
    this.setState({ modalAboutIsOpen: false });
  };
  showModalContact = () => {
    this.setState({ modalContactIsOpen: true });
  };
  hideModalContact = () => {
    this.setState({ modalContactIsOpen: false });
  };
  showModalJob = () => {
    this.setState({ modalJobIsOpen: true });
  };
  hideModalJob = () => {
    this.setState({ modalJobIsOpen: false });
  };

  showModalGallery = () => {
    this.setState({ modalGalleryIsOpen: true });
  };
  hideModalGallery = () => {
    this.setState({ modalGalleryIsOpen: false });
  };
  render() {
    return (
      <>
        <div className="wrapper-cards">
          {/* modal Qui sommes-nous? */}
          <div className="card-common qui" id="quiSommes">
            <img
              src="images/qui.png"
              alt=""
              role="presentation"
              className="card-common-img"
            />
            <h2 className="qui-h2">Qui sommes-nous?</h2>
            <button onClick={this.showModalAbout} className="btn-show">
              <FaPlus alt="plus" role="button" />
            </button>
            <Modal
              isOpen={this.state.modalAboutIsOpen}
              onRequestClose={this.hideModalAbout}
            >
              <button onClick={this.hideModalAbout} className="btn-close">
                Fermer
              </button>
              <div> {<About />}</div>
            </Modal>
          </div>

          {/* modal nous contacter */}
          <div className="card-common contact" id="contactUs">
            <img
              src="images/contact-devis.png"
              alt=""
              role="presentation"
              className="card-common-img"
            />
            <h2 className="contact-h2">Nous contacter</h2>
            <button
              onClick={this.showModalContact}
              className="btn-show"
              type="button"
            >
              <FaPlus alt="plus" role="button" />
            </button>
            <Modal
              isOpen={this.state.modalContactIsOpen}
              onRequestClose={this.hideModalContact}
            >
              <button
                onClick={this.hideModalContact}
                className="btn-close"
                type="button"
              >
                Fermer
              </button>
              <div>{<Contact />}</div>
            </Modal>
          </div>

          {/* modal postuler */}
          <div className="card-common postuler" id="post">
            <img
              src="images/postuler.png"
              alt=""
              role="presentation"
              className="card-common-img"
            />
            <h2 className="postuler-h2">Rejoindre nos équipes</h2>

            <button onClick={this.showModalJob} className="btn-show">
              <FaPlus alt="plus" role="button" />
            </button>
            <Modal
              isOpen={this.state.modalJobIsOpen}
              onRequestClose={this.hideModalJob}
            >
              <button
                onClick={this.hideModalJob}
                className="btn-close"
                type="button"
              >
                Fermer
              </button>
              <div> {<Job />}</div>
            </Modal>
          </div>

          {/* modal gallery */}
          <div className="card-common galerie" id="galerie">
            <img
              src="images/galerie.png"
              alt=""
              role="presentation"
              className="card-common-img"
            />
            <h2>Galerie</h2>
            <button
              onClick={this.showModalGallery}
              className="btn-show"
              type="button"
            >
              <FaPlus alt="plus" role="button" />
            </button>
            <Modal
              isOpen={this.state.modalGalleryIsOpen}
              onRequestClose={this.hideModalGallery}
            >
              <button onClick={this.hideModalGallery} className="btn-close">
                Fermer
              </button>
              <div> {<Gallery />}</div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}
