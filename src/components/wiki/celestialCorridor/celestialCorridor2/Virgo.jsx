import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/virgo.png';

const Virgo = () => {
    const teamComp= {healer:"Totem Master", debuffer:"Druid", dps1:'Blade Master', dps2:'Executioner / Rifleteer', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Virgo' solo={false} dmg='Lightning / Dark' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Virgo;