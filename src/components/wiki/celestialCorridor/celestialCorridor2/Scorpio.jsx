import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/scorpio.png';


const Scorpio = () => {
    const teamComp= {healer:"Totem Master", debuffer:"NPC (LA / Rifle / Pala?)", dps1:'Blade Master', dps2:'Executioner / Druid', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Scorpio' solo={false} dmg='Slash' comp={teamComp} img={bossImg}/>
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>
                        <h3>
                            {language === 'en' ? 'Boss mechanics :' : 'Méchanique du boss :'}
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Notes :
                        </h3>
                    </li>
                    <li>
                        <p>{language === 'en' ? "Scorpio can lower slash resistances by 40, having 40 to begin with should be enough, feel free to get more if your HP is on the lower end or if DPS is slow." : "Scorpio peut réduire les résis slash de 40, mais commencer le combat avec 40 de résis suffit normalement si vous avez assez d'HP et de DPS."}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Scorpio;