import { useLayoutEffect, useRef } from "react";
import waves from "../svgs/waves.svg";
import {gsap} from "gsap";

function TitleContent() {
    const scrollPromptRef = useRef();
    const waveRef = useRef();

    useLayoutEffect(() => {
        // Scroll down prompt bobbing up and down
        gsap.to(scrollPromptRef.current, {
            y: 20,
            ease: "sine.inOut",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });

        // Wave loop
        gsap.to(waveRef.current, {
            xPercent: -5,
            duration: 2,
            repeat: -1,
            ease: "none",
        });
    }, []);

    return (
        <div className="container sky">
            <h1>Creatures of the Deep Sea</h1>
            <div className="scroll-down" ref={scrollPromptRef}>
                <h3>Scroll Down!</h3>
                <h3>
                    <span className="material-symbols-outlined">expand_more</span>
                </h3>
            </div>
            <div className="wave-container">
                <img className="wave-img" src={waves} alt="waves" ref={waveRef}/>
            </div>
        </div>
    );
}

export default TitleContent;
