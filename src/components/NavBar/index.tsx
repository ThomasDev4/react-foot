import "./index.css"

function NavBar() {
	return (
		<header>
			<nav>
				<ul>
					<li><img className="pmu" src="./src/assets/PMU.svg" alt="" /></li>
					<li>Calendrier</li>
					<li>MATCH</li>
					<li>Equipes</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
