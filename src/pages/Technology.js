// import {  } from ""
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import "../styles/technology.css";
function Technology(props) {
	const { data: technologies } = useFetch("technology");
	const [currentTechnology, setCurrentTechnology] = useState(null);
	useEffect(() => {
		if (technologies) {
			setCurrentTechnology(technologies[0]);
		}
	}, [technologies]);
	return (
		<div className="technology page">
			<Navbar />
			{currentTechnology && (
				<main>
					<p className="pageHeader stat">
						<span className="pageNumber">03</span> <span>Space Launch 101</span>
					</p>
					<div className="technologyBody d-flex">
						<div>
							<div className="details d-flex ">
								{/* <ul className="list-unstyled technologyNav">
									{technologies.map((t) => (
										<li
											key={t.name}
											onClick={() => {
												setCurrentTechnology(t);
												document
													.querySelector(".destinationImage>img")
													.classList.remove("animateImage");
												setTimeout(() => {
													document
														.querySelector(".destinationImage>img")
														.classList.add("animateImage");
												});
												window.scrollTo(0, 0);
											}}
											className={
												currentTechnology === t ? " currentTechnology" : "ap "
											}
										>
											{t.name}
										</li>
									))}
								</ul> */}
								<h1 className="big-text technologyName">
									{currentTechnology.name}
								</h1>
								<p className="small-text-colored text-center ">
									{currentTechnology.description}
								</p>
							</div>
						</div>
						<div className="large-right">
							<div className="technologyImage">
								<img src={currentTechnology.images.portrait} alt="technology" />
							</div>
							{/* <div className="stats d-flex text-center">
								<div>
									<p className="stat-header">AVG. DISTANCE</p>

									<p className="stat">{currentDestination.distance}</p>
								</div>
								<div>
									<p className="stat-header">EST. TRAVEL TIME</p>
									<p className="stat">{currentDestination.travel}</p>
								</div>
							</div> */}
						</div>
					</div>
				</main>
			)}
		</div>
	);
}

export default Technology;
