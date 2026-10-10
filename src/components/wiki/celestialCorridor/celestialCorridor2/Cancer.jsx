import CcBossHeader from "../BossHeader";
import '../ccBoss.css';

const Cancer = () => {
    const teamComp= {healer:"Totem Master", debuffer:"Paladin / DT / Annihilator", dps1:'Annihilator', dps2:'Celestial Arrow', dps3:'Rifleteer'}
    const bossImg = 'https://placehold.co/600x400';
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Cancer' solo={false} dmg='Pierce' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Cancer;