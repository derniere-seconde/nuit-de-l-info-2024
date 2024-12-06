import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

import "./popup.css";

const OrganPopup = ({ organName, onClose, position }) => {

    const organDetails = {
        cerveau: {
          title: "Cerveau",
          description:
            "Le cerveau orchestre les fonctions corporelles, en contrôlant les systèmes nerveux et endocriniens, et en régulant les réponses au stress ou aux changements environnementaux.",
          parallel:
            "En tant que régulateur global, l'océan influence les cycles climatiques et synchronise les systèmes planétaires via des interactions complexes avec l’atmosphère.",
        },
        poumons: {
          title: "POUMONS",
          description:
            "Les poumons assurent les échanges gazeux vitaux : absorption d’oxygène pour alimenter les cellules et élimination du dioxyde de carbone produit par le métabolisme.",
          parallel:
            "Les phytoplanctons océaniques produisent environ 50 à 70 % de l'oxygène atmosphérique et absorbent une part significative de CO₂.",
        },
        coeur: {
            title: "COEUR",
          description:
            "Le cœur, en pompant le sang, régule la température interne du corps grâce à la distribution sanguine.",
          parallel:
            "Les courants océaniques et les échanges thermiques participent à la régulation du climat terrestre, en redistribuant la chaleur depuis l'équateur vers les pôles.",
        },
        foie: {
            title: "FOIE",
          description:
            "Le cerveau orchestre les fonctions corporelles, en contrôlant les systèmes nerveux et endocriniens, et en régulant les réponses au stress ou aux changements environnementaux.",
          parallel:
            "En tant que régulateur global, l'océan influence les cycles climatiques et synchronise les systèmes planétaires via des interactions complexes avec l’atmosphère.",
        },
        estomac: {
            title: "ESTOMAC",
          description:
            "L'estomac est le site de la première phase majeure de la digestion, où les aliments sont décomposés en leurs composants essentiels",
          parallel:
            "L'océan agit comme un immense système de transformation des matières organiques. Les détritus, végétaux et animaux morts tombent au fond, où ils sont décomposés par des microorganismes marins (bactéries et champignons) en nutriments essentiels.",
        },
        rein: {
            title: "REIN",
          description:
            "Les reins filtrent le sang, éliminant les déchets métaboliques et les toxines à travers l’urine, tout en régulant l’équilibre hydrique et électrolytique du corps.",
          parallel:
            "Les mangroves, les récifs coralliens, et certaines espèces marines (comme les huîtres) agissent comme des systèmes naturels de filtration, nettoyant l’eau des polluants et nutriments excédentaires.",
        },
        intestin: {
            title: "INTESTIN",
          description:
            "Les intestins, particulièrement le côlon, absorbent l’eau et les nutriments finaux des aliments digérés. Ils hébergent un microbiote intestinal complexe",
          parallel:
            "Les zones côtières et benthiques (proches des fonds marins) jouent un rôle similaire à celui du côlon. Elles absorbent, filtrent, et recyclent les nutriments et les déchets, tout en offrant un habitat riche en biodiversité.",
        }, 
        vaisseaux: {
            title: "VAISSEAUX",
          description:
            "L'océan joue un rôle central dans la circulation mondiale de l’eau et des nutriments grâce aux courants océaniques, garantissant un équilibre écologique. De plus, Les écosystèmes océaniques, tels que les récifs coralliens, protègent les côtes des tempêtes et des tsunamis, jouant un rôle similaire à celui d’un système immunitaire global en atténuant les impacts des catastrophes naturelles.",
          parallel:
            "Le sang transporte l’oxygène, les nutriments et les hormones vers les cellules tout en éliminant les déchets métaboliques. Ausi, les globules blans &ci protègent le corps contre les infections et maintient son intégrité en éliminant les agents pathogènes.",
        }
      };

      const organInfo = organDetails[organName];
      
  return (
    <Popup
      open
      onClose={onClose}
      closeOnDocumentClick
      contentStyle={{
        padding: "0",
        border: "none",
        borderRadius: "10px",
        width: "auto",
        maxWidth: "400px",
      }}
      overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3 style={{ marginBottom: "15px", textAlign: "center", fontWeight: "bold" }}>
          {organInfo.title}
        </h3>
        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>
          {organInfo.description || "NOT AVAILABLE"}
        </p>
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          <strong>Parallèle avec l'océan :</strong> {organInfo.parallel || "NOT AVAILABLE"}
        </p>
      </div>
    </Popup>
  );
};

OrganPopup.propTypes = {
  organName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default OrganPopup;



