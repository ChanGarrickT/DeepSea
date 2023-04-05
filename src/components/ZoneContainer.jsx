import TitleContent from "./TitleContent";
import ZoneContent from "./ZoneContent";

function ZoneContainer(props) {
    return (
        <div>
            {props.zoneName === "sky" ? (
                <TitleContent />
            ) : (
                <ZoneContent
                    zoneName={props.zoneName}
                    prevZone={props.prevZone}
                    id={props.id}
                />
            )}
        </div>
    );
}

export default ZoneContainer;
