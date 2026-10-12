import CcBossHeader from "../BossHeader";
import '../ccBoss.css';
import bossImg from '../../../../content/images/celestialCorridor2/pisces.jpg';


const Pisces = () => {
    const teamComp= {healer:"Totem Master / Life Worshipper", debuffer:"Paladin / Rifleteer", dps1:'Blade Master', dps2:'Executioner / Berserker', dps3:'Assassin / Berserker'}
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Pisces' solo={false} dmg='Holy / Ice' comp={teamComp} img={bossImg}/>
            <div className="ccBossConcent">
                <ul className="ccBossMecha">
                    <li>Oula cé dur</li>
                </ul>
            </div>
        </div>  
    );
}

export default Pisces;