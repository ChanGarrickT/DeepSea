import data from "../zoneData.json";

function ZoneIntro(props) {
    return (
        <div>
            <h2>{data[props.zoneName].header}</h2>
            <h4>{data[props.zoneName].subtitle}</h4>
        </div>
    );
}

export default ZoneIntro;
