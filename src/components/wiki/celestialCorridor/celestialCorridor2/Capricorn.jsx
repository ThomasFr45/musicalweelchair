import CcBossHeader from "../BossHeader";
import '../ccBoss.css';

const Capricorn = () => {
    const teamComp= {healer:"Totem Master", debuffer:"Shielder", dps1:'Assassin', dps2:'Druid', dps3:'Executioner / Asura / BM?'}
    const bossImg = 'https://placehold.co/600x400';
    return (
        <div className="ccBossContainer">
            <CcBossHeader name='Capricorn' solo={false} dmg='Slash' comp={teamComp} img={bossImg}/>
        </div>
    );
}

export default Capricorn;