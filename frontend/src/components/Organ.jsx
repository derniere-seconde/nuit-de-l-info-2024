import React, { useState } from 'react';
import PropTypes from 'prop-types';

import OrganPopup from "./OrganPopup";

import Cerveau from "../assets/cerveau.png";
import Poumons from "../assets/poumons.png";
import Coeur from "../assets/coeur.png";
import Foie from "../assets/foie.png";
import Estomac from "../assets/estomac.png";
import Rein from "../assets/reins.png";
import Intestin from "../assets/intestin.png";
import Vaisseaux from "../assets/vaisseaux-sanguins.png";


const Organ = ({organName}) => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });

    const organImages = {
        
        poumons: Poumons,
        cerveau: Cerveau,
        coeur: Coeur,
        foie: Foie,
        estomac: Estomac,
        reins: Rein,
        intestin: Intestin,
        vaisseaux: Vaisseaux
    }
    /*
    const organStyle = {
        cerveau: { position: 'absolute', top: '140px', left: '320px', width: '220px', height: '220px' },
        poumons: { position: 'absolute', top: '270px', left: '230px', width: '420px', height: '420px' },
        coeur: { position: 'absolute', top: '400px', left: '350px', width: '190px', height: '190px' },
        foie: { position: 'absolute', top: '470px', left: '320px', width: '190px', height: '190px' },
        estomac: { position: 'absolute', top: '465px', left: '300px', width: '290px', height: '290px' },
        reins: { position: 'absolute', top: '450px', left: '340px', width: '200px', height: '200px' },
        intestin: { position: 'absolute', top: '550px', left: '260px', width: '330px', height: '330px' },
        vaisseaux: { position: 'absolute', top: '-40px', left: '-10px', width: '1000px', height: '1000px' }
    } */

        const organStyle = {
            cerveau: { position: 'absolute', cursor: 'pointer', top: '32%', left: '36%', width: '25%', height: '15%' },
            poumons: { position: 'absolute', cursor: 'pointer', top: '40%', left: '27%', width: '45%', height: '25%' },
            coeur: { position: 'absolute', cursor: 'pointer', top: '48%', left: '40%', width: '20%', height: '10%' },
            foie: { position: 'absolute', cursor: 'pointer', top: '51%', left: '35%', width: '25%', height: '15%' },
            estomac: { position: 'absolute', cursor: 'pointer', top: '51%', left: '39%', width: '27%', height: '17%' },
            reins: { position: 'absolute', cursor: 'pointer', top: '53%', left: '40%', width: '20%', height: '14%' },
            intestin: { position: 'absolute', cursor: 'pointer', top: '55%', left: '29%', width: '40%', height: '20%' },
            vaisseaux: { position: 'absolute', cursor: 'pointer',top: '25%', left: '10%', width: '70%', height: '50%' }
        };
        

    const handleClick = (e) => {
        e.preventDefault();
        const rect = e.target.getBoundingClientRect(); // Récupère la position et la taille
        setPopupPosition({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
        setShowPopup(true);
    };


    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const url = organImages[organName];
    const style = organStyle[organName];

    return (
        <>
            <img onClick={handleClick} src ={url} alt = {organName} style={style}/>
            {showPopup && (
                <OrganPopup organName={organName} onClose={handleClosePopup} position={popupPosition} />
            )}
        </>
    );
}

Organ.propTypes = {
    organName: PropTypes.string.isRequired,
}
    
export default Organ;

