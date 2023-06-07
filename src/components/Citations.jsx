import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import citations from "../citations.json";

const sources = citations;
console.log(sources);

export default function Citations(props){
    return ( 
        <div className="Sources">
            <h2>Citations</h2>
            {sources.map((source, index) => (
                <div>
                    <h3>{source.title}</h3>
                    {source.author != null ? <h6>{source.author}</h6> : null}
                    {source.url != null ? <h6>{source.url}</h6> : null}
                </div>
            ))}
        </div>
    );
}

