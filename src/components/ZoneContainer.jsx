import TitleContent from "./TitleContent";
import ZoneContent from "./ZoneContent";

function ZoneContainer(props) {
    if (props.zoneName === "sky") {
        return <TitleContent />;
    } else {
        return <ZoneContent
            zoneName={props.zoneName}
            prevZone={props.prevZone}
            id={props.id}
        />;
    }
}

export default ZoneContainer;
