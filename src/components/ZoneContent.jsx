import ZoneIntro from "./ZoneIntro";
import ZoneFact from "./ZoneFact";

export default function ZoneContent(props){
    return (
        <div className={`container ${props.zoneName}`}>
            <ZoneIntro zoneName={props.zoneName}/>
        </div>
    )
}