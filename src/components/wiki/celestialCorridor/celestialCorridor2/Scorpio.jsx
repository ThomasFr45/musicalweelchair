import CcBossHeader from "../BossHeader";
import '../ccBoss.css';

const Scorpio = () => {
    const teamComp= {healer:"Totem Master", debuffer:"Paladin / Rifleteer", dps1:'Blade Master', dps2:'Executioner', dps3:'Assassin / Berserker'}
    const bossImg = 'https://placehold.co/600x400';
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Scorpio' solo={false} dmg='N/A' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Scorpio;