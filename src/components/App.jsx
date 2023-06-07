import "../App.css";
import ZoneContainer from "./ZoneContainer";
import Citations from "./Citations";

const zones = ["sky", "sunlit", "twilight", "midnight", "abyssal", "hadal"];

function App() {
    return (
        <div className="App">
            {zones.map((zone, index) => (
                <ZoneContainer
                    key={index}
                    id={index}
                    zoneName={zone}
                    prevZone={index > 1 ? zones[index - 1] : null}
                />
            ))}
            <Citations />
        </div>
    );
}

export default App;
