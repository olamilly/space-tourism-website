// import {  } from ""
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import "../styles/destination.css";
function Destination() {
	const { data: destinations } = useFetch("destinations");
	const [currentDestination, setCurrentDestination] = useState(null);
	const [destinationIndex, setDestinationIndex] = useState(0);
	const swipeTargetRef = useRef(null);
	const [startX, setStartX] = useState(0);
	const [startY, setStartY] = useState(0);

	const handleSwipeStart = (event) => {
		const touch = event.touches[0];
		setStartX(touch.clientX);
		setStartY(touch.clientY);
	};

	const handleSwipeEnd = (event) => {
		const touch = event.changedTouches[0];
		const endX = touch.clientX;
		const endY = touch.clientY;
		const deltaX = endX - startX;
		const deltaY = endY - startY;

		if (Math.abs(deltaX) > Math.abs(deltaY)) {
			// Horizontal swipe detected
			if (deltaX > 0) {
				if (destinationIndex !== 0) {
					setDestinationIndex(destinationIndex - 1);
					setCurrentDestination(destinations[destinationIndex - 1]);
				} else {
					setDestinationIndex(destinations.length - 1);
					setCurrentDestination(destinations[destinations.length - 1]);
				}
			} else {
				if (destinationIndex !== destinations.length - 1) {
					setDestinationIndex(destinationIndex + 1);
					setCurrentDestination(destinations[destinationIndex + 1]);
				} else {
					setDestinationIndex(0);
					setCurrentDestination(destinations[0]);
				}
			}
		}
	};

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
					<p className="pageHeader stat">
						<span className="pageNumber">01</span>{" "}
						<span>PICK YOUR DESTINATION</span>
					</p>
					<div
						className="destinationBody d-flex"
						ref={swipeTargetRef}
						onTouchStart={handleSwipeStart}
						onTouchEnd={handleSwipeEnd}
					>
						<div>
							<div className="destinationImage">
								<img
									src={currentDestination.images.webp}
									className="animateImage"
									alt="destination"
								/>
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
												currentDestination === d ? " currentDestination" : "ap "
											}
										>
											{d.name.toUpperCase()}
										</li>
									))}
								</ul>
								<h1 className="big-text destinationName">
									{currentDestination.name.toUpperCase()}
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
