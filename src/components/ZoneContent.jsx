import ZoneIntro from "./ZoneIntro";
import ZoneFact from "./ZoneFact";
import { useLayoutEffect, useRef } from "react";
import zoneData from "../zoneData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoneContent(props) {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Transition from the previous zone's background color
            // Applies only to second zone and beyond
            if (props.id > 1) {
                gsap.from(containerRef.current, {
                    backgroundColor: zoneData[props.prevZone].bgColor,
                    scrollTrigger: {
                        start: "top top",
                        end: "top -10%",
                        scrub: true,
                        trigger: containerRef.current,
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={`container ${props.zoneName}`} ref={containerRef}>
            <ZoneIntro
                zoneName={props.zoneName}
                header={zoneData[props.zoneName].header}
                subtitle={zoneData[props.zoneName].subtitle}
            />
        </div>
    );
}
