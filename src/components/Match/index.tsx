import { useState } from "react";
import "./index.css";

interface MatchProps {
	logoClub: string;
	name: string;
	logoOtherClub: string;
	nameOtherClub: string;
}

function Match(props: MatchProps) {

	const [count, setCount] = useState(0);
	const [newcount, newsetCount] = useState(0);
	const [showGoalImage, setShowGoalImage] = useState(false);

	const handleGoalOtherTeam = () => {
		setShowGoalImage(true);

		setTimeout(() => {
			setShowGoalImage(false);
		}, 3000);
	};

	return (
		<>
			<h1>Score : {count} - 0 </h1>
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
				<img
					className="terrain"
					src="./src/assets/terrain-de-foot.png"
					alt=""
				/>
				<figure>
					<img src={props.logoOtherClub} alt="" />
					<figcaption>
						{props.nameOtherClub}
						<button type="button" onClick={handleGoalOtherTeam}>
							⚽️ {newcount}
						</button>
					</figcaption>
				</figure>
				{showGoalImage && (
					<img
						className="goal-image"
						src="./src/assets/offside.png"
						alt="Célébration de but"
						style={{
							width: "1500px",
							height: "auto",
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					/>
				)}
			</section>
		</>
	);
}
export default Match;
