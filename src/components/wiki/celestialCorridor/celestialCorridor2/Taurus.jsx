import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/taurus.png';


const Taurus = () => {
    const teamComp= {healer:"Totem Master", debuffer:"Wyvern / BP ?", dps1:'Demon Tamer', dps2:'Gravity Manipulator', dps3:'Druid'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Taurus' solo={false} dmg='Strike' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Taurus;