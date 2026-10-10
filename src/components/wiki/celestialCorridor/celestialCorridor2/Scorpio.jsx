import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/scorpio.png';


const Scorpio = () => {
    const teamComp= {healer:"Totem Master", debuffer:"NPC (LA / Rifle / Pala?)", dps1:'Blade Master', dps2:'Executioner / Druid', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Scorpio' solo={false} dmg='Slash' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Scorpio;