import { useState } from "react";
import "./index.css";


interface MatchProps {
	logoClub: string;
	name: string;
	logoOtherClub: string
	nameOtherClub: string

}

function Match (props : MatchProps) {
	
/*     const teams = [
		{ name: "PSG", logoClub: "" },

		{
			name: "OM",
			logoClub: "",
		},
	]; */
	const [count, setCount] = useState(0);
	const [newcount, newsetCount] = useState(0);
	return (
		<>
		<h1>Score : {count} - {newcount}</h1>
		<section className="match">
			<figure>
				<img src={props.logoClub} alt="" />
				<figcaption>
					{props.name}
					<button type="button" onClick={() => setCount(count + 1)}>
						⚽️ {count}
					</button>
				</figcaption>
			</figure>
			<img className="terrain" src="./src/assets/terrain-de-foot.png" alt="" />
			<figure>
				<img src={props.logoOtherClub} alt="" />
				<figcaption>
					{props.nameOtherClub}
					<button type="button" onClick={() => newsetCount(newcount + 1)}>
						⚽️ {newcount}
					</button>
				</figcaption>
			</figure>
		</section>
		</>
	);

}
export default Match


