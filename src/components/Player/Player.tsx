import { useEffect, useState } from 'react';
import './Player.scss';

export default function Player() {

    const [goals, setGoals] = useState(2);
    const [goalsMissed, setGoalsMissed] = useState(3);
    const [passes, setPasses] = useState(20);
    const [assists, setAssists] = useState(2);
    const [playerRating, setPlayerRating] = useState(60);

    useEffect(() => {
        fetch("http://localhost:3333/stats", {
            method: "POST",
            body: JSON.stringify({
                goals: goals,
                goalsMissed: goalsMissed,
                passes: passes,
                assists: assists,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setPlayerRating(data.rate);
                }
            )
    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[url('https://user-images.githubusercontent.com/22690563/67150939-14a0b180-f2c7-11e9-8016-a993a397e1c5.jpg')] bg-bottom">
            <div className="w-[225px] h-[360px] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] bg-contain bg-no-repeat bg-center">
                <div className="relative h-[192px] w-[200px] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/messi.png')] bg-contain bg-no-repeat bg-right-bottom bg-[length:130px_130px]">
                    <span className='text-yellow-500 font-bold text-[40px] relative top-[60px] left-[25px]'>{playerRating}</span>
                </div>
                <div className='w-[225px] flex justify-center'>
                    <div className="flex justify-between items-center w-[200px] text-yellow-500">
                        <div className="text-center">
                            <div className="statusItem p-[6px] font-light"><strong className='font-black '>70</strong> PAS</div>
                            <div className="statusItem p-[6px] font-light"><strong className='font-black'>22</strong> CHU</div>
                            <div className="statusItem p-[6px] font-light"><strong className='font-black'>12</strong> GOL</div>
                        </div>
                        <div className="text-center">
                            <div className="statusItem p-[6px] font-light"><strong className='font-black'>70</strong> GOP</div>
                            <div className="statusItem p-[6px] font-light"><strong className='font-black'>22</strong> PAE</div>
                            <div className="statusItem p-[6px] font-light"><strong className='font-black'>12</strong> DES</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}