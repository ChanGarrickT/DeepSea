function ZoneFact(props) {
    console.log(props);
    return (
        <div className="factContainer">
            <div className="factText">
                <h5>{props.factHeader}</h5>
                <p>{props.factBody}</p>
            </div>
        </div>
    );
}

export default ZoneFact;
