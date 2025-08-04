import { useEffect, useRef, useState } from 'react';

interface VantaBackgroundProps {
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
}

export default function VantaBackground({
    highlightColor = 0xff00ff,
    midtoneColor = 0x4400ff,
    lowlightColor = 0x00e0ff,
    baseColor = 0x0a001f,
}: VantaBackgroundProps) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (!vantaEffect && window.VANTA?.FOG && vantaRef.current) {
            const effect = window.VANTA.FOG({
                el: vantaRef.current,
                THREE: (window as any).THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                highlightColor,
                midtoneColor,
                lowlightColor,
                baseColor,
                blurFactor: 0.6,
                speed: 1.0,
                zoom: 1.0,
            });

            setVantaEffect(effect);
        }

        return () => {
            vantaEffect?.destroy();
        };
    }, [vantaEffect, highlightColor, midtoneColor, lowlightColor, baseColor]);

    return <div ref={vantaRef} className="absolute inset-0 -z-10 w-full h-full" />;
}
