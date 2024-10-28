import { useState } from "react";
import "./index.css";


interface MatchProps {
	logoClub: string;
	name: string;
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
	return (
		<>
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
		</section>
		</>
	);

}
export default Match


