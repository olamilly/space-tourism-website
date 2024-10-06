// import {  } from ""
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import "../styles/destination.css";
function Destination() {
	const { data: destinations } = useFetch("destinations");
	const [currentDestination, setCurrentDestination] = useState(null);
	useEffect(() => {
		if (destinations) {
			setCurrentDestination(destinations[0]);
		}
	}, [destinations]);
	return (
		<div className="destination page">
			<Navbar />
			{currentDestination && (
				<main>
					<div className="destinationBody d-flex">
						<div>
							<p className="pageHeader stat mb-0">
								<span className="pageNumber">01</span>{" "}
								<span>Pick your Destination</span>
							</p>
							<div className="image">
								<img src={currentDestination.images.webp} alt="destination" />
							</div>
						</div>
						<div className="large-right">
							<div className="details d-flex">
								<ul className="list-unstyled destinationNav">
									{destinations.map((d) => (
										<li
											key={d.name}
											onClick={() => {
												setCurrentDestination(d);
											}}
											className={
												currentDestination === d ? " currentDestination" : "ap "
											}
										>
											{d.name}
										</li>
									))}
								</ul>
								<h1 className="big-text destinationName">
									{currentDestination.name}
								</h1>
								<p className="small-text-colored text-center ">
									{currentDestination.description}
								</p>
							</div>
							<div className="stats d-flex text-center">
								<div>
									<p className="stat-header">AVG. DISTANCE</p>

									<p className="stat">{currentDestination.distance}</p>
								</div>
								<div>
									<p className="stat-header">EST. TRAVEL TIME</p>
									{/* <br /> */}
									<p className="stat">{currentDestination.travel}</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			)}
		</div>
	);
}

export default Destination;
