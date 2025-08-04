// src/components/VantaBackground.tsx
import { useEffect, useRef, useState } from 'react';

function VantaBackground() {
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
                highlightColor: 0xff00ff,     // Neon magenta
                midtoneColor: 0x4400ff,       // Deep purple
                lowlightColor: 0x00e0ff,      // Bright cyan
                baseColor: 0x0a001f,          // Very dark blue-violet
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

export default VantaBackground;
