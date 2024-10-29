
interface playersProps {
	name: string;
	firstName: string;
	position: string;
	number: number;
}

function Player({ name, firstName, position, number }: playersProps) {
	return (
		<li>
			{number} - {firstName} {name} ({position})
		</li>
	);
}

export default Player;