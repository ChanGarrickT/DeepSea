import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ZoneFact(props) {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".factImg", {
                x: props.id % 2 === 0 ? "50" : "-50",
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    scrub: 1,
                    ease: "power2.out",
                },
            });
            gsap.from(".factText", {
                x: props.id % 2 === 0 ? "60" : "-60",
                autoAlpha: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "top 55%",
                    scrub: 1,
                    ease: "power2.out",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [props.id]);

    // Alternate between rendering the image on the left and right of text
    return (
        <div className="factContainer" ref={containerRef}>
            {props.id % 2 === 0 ? (
                <img
                    className="factImg"
                    src={props.imgSrc}
                    alt="vector drawing"
                />
            ) : null}
            <div className="factText">
                <h5>{props.factHeader}</h5>
                <p>{props.factBody}</p>
            </div>
            {props.id % 2 === 1 ? (
                <img
                    className="factImg"
                    src={props.imgSrc}
                    alt="vector drawing"
                />
            ) : null}
        </div>
    );
}
