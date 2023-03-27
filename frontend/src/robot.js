import React from 'react'
import './robot.css'
export default function Robot({ speaking = false }) {
    return (

        <div>
            <div className={`robot ${speaking ? 'robot_speaking' : ''}`}>
                <div className="neck" />
                <div className="arms">
                    <div className="arm arm_left" />
                    <div className="arm arm_right" />
                </div>
                <div className="torso" />
                <div className="head">
                    <div className="eyes">
                        <div className="eyeball eyeball_left" />
                        <div className="eyeball eyeball_right" />
                    </div>
                    <div className="mouth">
                        <div className="mouth-container">
                            <div className="mouth-container-line" />
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
                <defs>
                    {/* Low */}
                    <filter id="low-0">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={0} />
                        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale={1} />
                    </filter>
                    <filter id="low-1">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={30} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                    </filter>
                    <filter id="low-2">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={2} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={1} />
                    </filter>
                    <filter id="low-3">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={30} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                    </filter>
                    <filter id="low-4">
                        <feTurbulence id="turbulence" baseFrequency="0.1" numOctaves={3} result="noise" seed={4} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
                    </filter>
                    {/* Listening */}
                    <filter id="listening-0">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={0} />
                        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale={2} />
                    </filter>
                    <filter id="listening-1">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={30} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={3} />
                    </filter>
                    <filter id="listening-2">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={2} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={2} />
                    </filter>
                    <filter id="listening-3">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={30} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={3} />
                    </filter>
                    <filter id="listening-4">
                        <feTurbulence id="turbulence" baseFrequency="0.1" numOctaves={3} result="noise" seed={4} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={1} />
                    </filter>
                    {/* Speaking */}
                    <filter id="speaking-0">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={0} />
                        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale={12} />
                    </filter>
                    <filter id="speaking-1">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={30} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={13} />
                    </filter>
                    <filter id="speaking-2">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={2} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={12} />
                    </filter>
                    <filter id="speaking-3">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves={3} result="noise" seed={30} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={13} />
                    </filter>
                    <filter id="speaking-4">
                        <feTurbulence id="turbulence" baseFrequency="0.1" numOctaves={3} result="noise" seed={4} />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale={11} />
                    </filter>
                </defs>
            </svg>
          

        </div>

    )
}
