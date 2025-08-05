import { useEffect, useRef, useState } from 'react';

export default function VantaBackground() {
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
                highlightColor: 0x3399ff,   // Sky blue (for glowing highlights)
                midtoneColor: 0x0033cc,   // Rich blue (core fog structure)
                lowlightColor: 0xff4500,    // Orange-red (lowlight flickers)
                baseColor: 0x000814,        // Deep navy (almost-black backdrop)
                blurFactor: 0.6,
                speed: 1.0,
                zoom: 1.0,
            });

            setVantaEffect(effect);
        }

        return () => {
            vantaEffect?.destroy();
        };
    }, [vantaEffect]);

    return <div ref={vantaRef} className="absolute inset-0 -z-10 w-full h-full" />;
}
