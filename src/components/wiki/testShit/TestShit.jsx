import testShit from '../../../content/testShit';
import './testShit.css';
import { useState, useContext } from 'react';
import myContext from '../../../context/MyContext';

const TestShit = () => {
    const { language } = useContext(myContext);
    const localTime = new Date();
    const serverTimeZone = "Canada/Eastern"
    const serverTime = new Intl.DateTimeFormat('en-US', {
        timeZone: serverTimeZone,
        dateStyle: 'full',
        timeStyle: 'full',
    }).format(localTime)
    const day = serverTime.split(',')[0];
    const [ selected, setSelected ] = useState(day);
    const handleDaySelection = (clickedDay) => {
        setSelected(clickedDay);
        return;
    };
    return (
        <div>
            <div className='weekContainer'>
                <div className={selected === 'Monday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Monday")
                }}>Monday</div>
                <div className={selected === 'Tuesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Tuesday")
                }}>Tuesday</div>
                <div className={selected === 'Wednesday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Wednesday")
                }}>Wednesday</div>
                <div className="disabledDay" onClick={() => {
                    handleDaySelection("Thursday")
                }}>Thursday</div>
                <div className={selected === 'Friday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Friday")
                }}>Friday</div>
                <div className={selected === 'Saturday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Saturday")
                }}>Saturday</div>
                <div className={selected === 'Sunday' ? 'weekDaySelected' : 'weekDay'} onClick={() => {
                    handleDaySelection("Sunday")
                }}>Sunday</div>
            </div>
            <div className='dayInfos'>
                {selected === 'Thursday' ? language === 'en' ? 'There is no opened bosses today.' : "Aucun boss ouvert aujourd'hui." : <h3>
                    <p className='dayInfosSentence'>Today the following bosses are open :</p>
                    {testShit[selected].split('\n').map(boss => {
                    return(
                        <div className='dayInfosBoss'>
                            <p>{boss}</p>
                        </div>
                    )
                })}
                </h3>}
            </div>
        </div>
    )
};
// weekDaySelected
export default TestShit;