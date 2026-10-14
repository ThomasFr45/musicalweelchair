import "./bossHeader.css";

const CcBossHeader = (props) => {
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
          <p>{localStorage.getItem('language') === 'en' ? "Name" : "Nom"} : {props.name}</p>
          <p>Solo : {props.solo ? "Oui" : "Non"}</p>
          <p>{localStorage.getItem('language') === 'en' ? "DMG" : "Dégâts"} : {props.dmg}</p>
        </div>
      </div>
      <div className="ccBossComp">
        <h3>{localStorage.getItem('language') === 'en' ? "Recommended Classes :" : "Composition de groupe conseillée :"}</h3>
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