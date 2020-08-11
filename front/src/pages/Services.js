import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <>
        <div className="services-container ">
          <div className="services-title">
            <h1>Nos équipes sont là pour vous aider au quotidien</h1>
            <h2>avec bienveillance et discretion</h2>

            <span>
              Nos prestations s'adressent aux particuliers, commes aux
              professionnels.
            </span>
          </div>
          <div className="separator"></div>
          <div className="services-list-container">
            <div className="services-details">
              <h2>Aide à la personne</h2>
              <p>
                Et commodo elit sunt duis aliquip nisi sunt dolore sunt. Ullamco
                irure magna laboris laborum incididunt tempor reprehenderit
                minim.Et commodo elit sunt duis aliquip nisi sunt dolore sunt.
                Ullamco irure magna laboris laborum incididunt tempor
                reprehenderit minim.
              </p>
              <ul>
                <li>Aide aux repas</li>
                <li>Aide à la toilette</li>
                <li>Accompagnement en courses,</li>
                <li>aux RDV médicaux</li>
              </ul>
            </div>

            <div className="services-details">
              <h2>Services à la personne</h2>
              <p>
                Mollit commodo et voluptate culpa minim occaecat enim eu laboris
                irure laboris. Fugiat et veniam anim ipsum laborum dolor nostrud
                non dolore qui sint commodo quis.Et commodo elit sunt duis
                aliquip nisi sunt dolore sunt. Ullamco irure magna laboris
                laborum incididunt tempor reprehenderit minim.
              </p>
              <ul>
                <li>Ménage</li>
                <li>Repassage</li>
                <li>Petits travaux</li>
                <li>Jardinage</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
