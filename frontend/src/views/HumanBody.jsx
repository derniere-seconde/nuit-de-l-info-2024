import CorpsHumain from "../assets/corps-humain-vide.png";
import Organ from "../components/Organ";

const HumanBody = () => {
    return (
        <>
            <h1> Cliquez sur un organe </h1>

            <div
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '800px', 
                margin: '0 auto', 
                aspectRatio: '1 / 2', 
            }}
        >
            
            <img
                src={CorpsHumain}
                alt="corps humain"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', 
                }}
            />

            <Organ organName="vaisseaux" />
            <Organ organName="cerveau" />
            <Organ organName="intestin" />
            <Organ organName="estomac" />
            <Organ organName="foie" />
            <Organ organName="poumons" />  
            <Organ organName="coeur" />
            <Organ organName="reins" />
        </div>
        </>
       
    );
}
export default HumanBody;
