import { useEffect, useRef } from 'react';

/*
Thanks to Igor Bedesqui for open-sourcing his site, the grain effect is so cool.
https://github.com/bdsqqq/igorbedesqui.com/blob/main/app/Grain.tsx
*/
export const Grain = () => {
    const grainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grain = grainRef.current;
        if (!grain) return;

        const keyframesX = ['0%', '-5%', '-15%', '7%', '-5%', '-15%', '15%', '0%', '3%', '-10%'];
        const keyframesY = ['0%', '-10%', '5%', '-25%', '25%', '10%', '0%', '15%', '35%', '10%'];
        let i = 0;

        const interval = setInterval(() => {
            grain.style.transform = `translateX(${
                keyframesX[i % keyframesX.length]
            }) translateY(${keyframesY[i % keyframesY.length]})`;

            i++;
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden">
            <div
                ref={grainRef}
                className="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/images/framernoise.png')] bg-size-[256px] bg-top-left opacity-3"
            />
        </div>
    );
};
