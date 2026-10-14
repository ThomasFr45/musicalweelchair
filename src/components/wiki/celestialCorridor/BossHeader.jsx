import "./bossHeader.css";
import MyContext from '../../../context/MyContext';
import { useContext } from 'react';

const CcBossHeader = (props) => {
  const { language } = useContext(MyContext);
  return (
    <div className="ccBossHeader">
      <div className="ccBossProfil">
        <img
          src={props.img}
          alt="BossImg"
          title="BossImg"
          className="ccBossProfilPic"
        />
        <div className="ccBossProfilInfo">
          <p>{language === 'en' ? "Name" : "Nom"} : {props.name}</p>
          <p>Solo : {props.solo ? language === 'en' ? 'Yes' : 'Oui' : language === 'en' ? 'No' : 'Non'}</p>
          <p>{language === 'en' ? "DMG" : "Dégâts"} : {props.dmg}</p>
        </div>
      </div>
      <div className="ccBossComp">
        <h3>{language === 'en' ? "Recommended Classes :" : "Composition de groupe conseillée :"}</h3>
        <ul>
          <li>{props.comp.debuffer}</li>
          <li>{props.comp.dps1}</li>
          <li>{props.comp.dps2}</li>
          <li>{props.comp.dps3}</li>
          <li>{props.comp.healer}</li>
        </ul>
      </div>
    </div>
  );
};

export default CcBossHeader;