import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ZoneIntro(props) {
    const component = useRef(null);
    const scrollTrigInfo = {
        start: "top 70%",
        end: "top 55%",
        scrub: 1,
    };

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            const header = self.selector("h2")[0];
            gsap.from(header, {
                autoAlpha: 0,
                scrollTrigger: { trigger: header, ...scrollTrigInfo },
            });

            const subtitle = self.selector("h4")[0];
            gsap.from(subtitle, {
                autoAlpha: 0,
                scrollTrigger: { trigger: subtitle, ...scrollTrigInfo },
            });
        }, component);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={component}>
            <h2>{props.header}</h2>
            <h4>{props.subtitle}</h4>
        </div>
    );
}

export default ZoneIntro;
