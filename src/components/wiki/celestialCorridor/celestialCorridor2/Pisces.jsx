import CcBossHeader from "../BossHeader";
import '../ccBoss.css';

const Pisces = () => {
    const teamComp= {healer:"Totem Master / Life Worshipper", debuffer:"Paladin / Rifleteer", dps1:'Blade Master', dps2:'Executioner / Berserker', dps3:'Assassin / Berserker'}
    const bossImg = 'https://placehold.co/600x400';
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Pisces' solo={false} dmg='Holy / Ice' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Pisces;