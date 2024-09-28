// import {  } from ""
import "../styles/home.css";
import Navbar from "../components/Navbar";
function Home(props) {
	return (
		<div className="home page">
			<Navbar />
			<main>
				<div className="hero">
					<div className="text">
						<p className="w-100">So you want to travel to</p>
						<h1 className="w-100">SPACE</h1>
						<p>
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</p>
					</div>
					<div className="button-container">
						<div className="button">Explore</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
