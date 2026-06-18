import { useRef, useState } from 'react';
import "./style.css"
import type { Sector } from '@/types';
import PrizeWheel from '../PrizeWheel';

const Wheel = () => {
    const [sectors, setSectors] = useState<Sector[]>([{
        id: 1,
        label: "111111",
    }, {
        id: 2,
        label: "222222222",
    }, {
        id: 3,
        label: "333333",
    },
    {
        id: 4,
        label: "44444444444444",
    }]);
    const wheelRef = useRef(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const startTouch = useRef(0);

    const handleSpinStart = () => {
        setIsSpinning(true);
    };
    const handleSpinEnd = (sector) => {
        setIsSpinning(false);
    };


    const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
        startTouch.current = e.touches[0].clientX;
    };

    const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
        const touchMove = e?.touches?.[0]?.clientX;
        if (Math.abs(touchMove - startTouch.current) > 50 && !isSpinning) {
            wheelRef.current?.spin();
            setIsSpinning(true);
        }
    };


    if (!sectors.length) {
        return <>Loading..</>
    }
    return (
        <div className="content">
            <div className='wheel-container'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}>
                <PrizeWheel
                    ref={wheelRef}
                    sectors={sectors}
                    onSpinStart={handleSpinStart}
                    onSpinEnd={handleSpinEnd}
                    duration={20}
                    minSpins={15}
                    maxSpins={20}
                    frameColor="#ffd700"
                    middleColor="#ffd700"
                    middleDotColor="#8b7500"
                    winIndicatorColor="#ffd700"
                    winIndicatorDotColor="#8b7500"
                    sticksColor="#ffd700"
                    wheelColors={['#1ecbe1', '#27d83b', "#e2a41d", "#ea1553"]}
                    borderColor="#ffd700"
                    borderWidth={3}
                    textColor="#ffffff"
                    textFontSize={20}
                    wheelShadowColor="#000"
                    wheelShadowOpacity={0.2}
                    middleShadowColor="#000"
                    middleShadowOpacity={0.25}
                    indicatorShadowColor="#000"
                    indicatorShadowOpacity={0.3}
                />
            </div>
            <div onClick={() => {
                if (isSpinning) { return }
                wheelRef.current?.spin()
            }} className='wheel-btn'>
                spin
            </div>
        </div>
    );
}

export default Wheel