import { useEffect, useRef, useState } from 'react';

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        const initVanta = () => {
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
        };

        initVanta();

        const handleResize = () => {
            vantaEffect?.resize();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleResize);

        return () => {
            vantaEffect?.destroy();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ minHeight: '100vh', minWidth: '100vw' }}
        />
    );
}
