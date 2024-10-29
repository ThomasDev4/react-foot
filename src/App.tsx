import "./App.css";
import NavBar from "./components/NavBar/index";
import Match from "./components/Match";
import PSG from "./assets/logo-psg.png";
import OM from "./assets/logo-om.png";
import type { playersProps } from "./components/Compositions";
import Compositions from "./components/Compositions";

const psg: playersProps[] = [
	{ name: "O", firstName: "Dembele", position: "ATT", number: 10 },
	{ name: "B", firstName: "Barcola", position: "AG", number: 29 },
	{ name: "K", firstName: "Lee", position: "AD", number: 19 },
	{ name: "J", firstName: "Neves", position: "MT", number: 87 },
	{ name: "V", firstName: "Vitinha", position: "MT", number: 17 },
	{ name: "W", firstName: "Zaire Emery", position: "MT", number: 33 },
	{ name: "N", firstName: "Mendes", position: "DG", number: 25 },
	{ name: "W", firstName: "Pacho", position: "DC", number: 51 },
	{ name: "M", firstName: "Marquinhos", position: "DC", number: 5 },
	{ name: "A", firstName: "Hakimi", position: "DD", number: 2 },
	{ name: "G", firstName: "Donaruma", position: "G", number: 1 },
];

const om: playersProps[] = [
	{ name: "E", firstName: "Wahi", position: "ATT", number: 9 },
	{ name: "A", firstName: "Harit", position: "MOC", number: 11 },
	{ name: "M", firstName: "Greenwood", position: "AD", number: 10 },
	{ name: "L", firstName: "Luis Henrique", position: "MT", number: 44 },
	{ name: "A", firstName: "Rabiot", position: "MT", number: 25 },
	{ name: "P", firstName: "Hojbjerg", position: "MT", number: 23 },
	{ name: "A", firstName: "Murillo", position: "DD", number: 62 },
	{ name: "L", firstName: "Balerdi", position: "DC", number: 5 },
	{ name: "G", firstName: "Kondgobia", position: "DC", number: 19 },
	{ name: "L", firstName: "Brassier", position: "DG", number: 20 },
	{ name: "G", firstName: "Rulli", position: "G", number: 1 },
];

function App() {
	return (
		<>
			<NavBar />
			<Match
				logoClub={PSG}
				name={"PSG"}
				logoOtherClub={OM}
				nameOtherClub="OM"
			/>

			<Compositions firstTeam={psg} secondTeam={om} />
		</>
	);
}

export default App;
