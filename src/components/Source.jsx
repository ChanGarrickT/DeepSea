import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Source(props) {
    const sourceRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(sourceRef.current, {
                y: "30",
                autoAlpha: 0,
                scrollTrigger: {
                    start: "top 90%",
                    end: "top 70%",
                    duration: 0.5,
                    trigger: sourceRef.current,
                },
            });
        }, sourceRef);

        return () => ctx.revert();
    });

    const source = props.source;

    return (
        <div ref={sourceRef}>
            <p className="source-title">{source.title}</p>
            {source.author != null ? (
                <p className="source-detail">{source.author}</p>
            ) : null}
            {source.url != null ? (
                <a className="source-detail source-url" href={source.url} target="_blank" rel="noreferrer">
                    {source.url}
                </a>
            ) : null}
        </div>
    );
}
