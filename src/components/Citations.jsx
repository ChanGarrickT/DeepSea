import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import citations from "../citations.json";
import Source from "./Source.jsx"

gsap.registerPlugin(ScrollTrigger);

const sources = citations;

export default function Citations(props) {

    return (
        <div className="sources">
            <h2>Sources</h2>
            {sources.map((source) => (
                <Source source={source} />
            ))}
        </div>
    );
}
