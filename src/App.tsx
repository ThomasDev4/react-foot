import "./App.css";
import NavBar from "../components/NavBar/index";
import Match from "../components/Match";
import PSG from "./assets/logo-psg.png";
import OM from "./assets/logo-om.png";
/* import Terrain from "./assets/terrain-de-foot.png";
 */
/* const teams = [
    { name: "PSG", logoClub: "" },

    {
        name: "OM",
        logoClub: "",
    },
]; */

function App() {
	return (
		<>
			<NavBar />
			<Match logoClub={PSG} name={"PSG"} />
			<Match logoClub={OM} name={"OM"} />
		</>
	);
}

export default App;
