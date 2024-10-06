import { NavLink } from "react-router-dom";
import "../styles/home.css";
import Navbar from "../components/Navbar";
function Home(props) {
	return (
		<div className="home page">
			<div className="content">
				<Navbar />
				<main className="homeMain">
					<div className="hero">
						<div className="text">
							<div className="text-container">
								<p className="w-100 stat-colored mb-0">
									So you want to travel to
								</p>
								<h1 className="w-100 big-text mb-0">SPACE</h1>
								<p className="small-text-colored mw75">
									Let’s face it; if you want to go to space, you might as well
									genuinely go to outer space and not hover kind of on the edge
									of it. Well sit back, and relax because we’ll give you a truly
									out of this world experience!
								</p>
							</div>
						</div>
						<div className="button d-flex">
							<div className="animation-container ">
								<div className="vz-circle-bg"></div>
								<NavLink to="/destination">
									<div className="button-container vz-circle">
										<p className="mb-0">Explore</p>
									</div>
								</NavLink>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default Home;
