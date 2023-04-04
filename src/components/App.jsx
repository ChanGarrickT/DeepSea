import "../App.css";
import ZoneContainer from "./ZoneContainer";

const zones = ["sky", "sunlit", "twilight", "midnight", "abyssal", "hadal"];

function App() {
    return (
        <div className="App">
            {zones.map((zone, index) => <ZoneContainer key={index} zoneName={zone} />)}
        </div>
    );
}

export default App;
