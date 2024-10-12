// import {  } from ""
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import "../styles/technology.css";
function Technology(props) {
	const { data: technologies } = useFetch("technology");
	const [currentTechnology, setCurrentTechnology] = useState(null);
	const [technologyIndex, setTechnologyIndex] = useState(0);
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
				if (technologyIndex !== 0) {
					setTechnologyIndex(technologyIndex - 1);
					setCurrentTechnology(technologies[technologyIndex - 1]);
				} else {
					setTechnologyIndex(technologies.length - 1);
					setCurrentTechnology(technologies[technologies.length - 1]);
				}
			} else {
				if (technologyIndex !== technologies.length - 1) {
					setTechnologyIndex(technologyIndex + 1);
					setCurrentTechnology(technologies[technologyIndex + 1]);
				} else {
					setTechnologyIndex(0);
					setCurrentTechnology(technologies[0]);
				}
			}
		}
	};
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
						<span className="pageNumber">03</span> <span>SPACE LAUNCH 101</span>
					</p>
					<div
						className="technologyBody d-flex"
						ref={swipeTargetRef}
						onTouchStart={handleSwipeStart}
						onTouchEnd={handleSwipeEnd}
					>
						<div className="large-left">
							<div className="large-left-inner">
								<ul className="list-unstyled technologyNav">
									{technologies.map((t, index) => (
										<li
											key={t.name}
											onClick={() => {
												setCurrentTechnology(t);
												window.scrollTo(0, 0);
											}}
											className={
												currentTechnology === t
													? " currentTechnology"
													: "unselectedTechnology"
											}
										>
											<span>{index + 1}</span>
										</li>
									))}
								</ul>
								<div>
									{" "}
									<div className="details d-flex ">
										<p className=" memberRole">THE TERMINOLOGY...</p>
										<h1 className="big-text technologyName">
											{currentTechnology.name.toUpperCase()}
										</h1>
										<p className="small-text-colored text-center ">
											{currentTechnology.description}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="large-right">
							<div className="technologyImage">
								<img
									src={
										window.innerWidth >= 992
											? currentTechnology.images.portrait
											: currentTechnology.images.landscape
									}
									alt="technology"
								/>
							</div>
						</div>
					</div>
				</main>
			)}
		</div>
	);
}

export default Technology;
