import { useEffect, useState } from "react";
import Player from "./match.tsx";

export interface playersProps {
	name: string;
	firstName: string;
	position: string;
	number: number;
}

export interface CompositionProps {
	firstTeam: playersProps[];
	secondTeam: playersProps[];
}

function Compositions({ firstTeam, secondTeam }: CompositionProps) {
	const [currentPlayer, setPlayer] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			if (currentPlayer < firstTeam.length) {
				setPlayer((prev) => (prev + 1) % firstTeam.length);
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [currentPlayer, firstTeam.length]);
	return (
		<section className="compo">
			<h3>Composition des équipes</h3>

			<h4>PSG</h4>
			<ul>
				{firstTeam.map((player: playersProps) => (
					<Player
						key={player.number}
						name={player.name}
						firstName={player.firstName}
						position={player.position}
						number={player.number}
					/>
				))}
			</ul>

			<h4>OM</h4>
			<ul>
				{secondTeam.map((player: playersProps) => (
					<Player
						key={player.number}
						name={player.name}
						firstName={player.firstName}
						position={player.position}
						number={player.number}
					/>
				))}
			</ul>
		</section>
	);
}

export default Compositions;
