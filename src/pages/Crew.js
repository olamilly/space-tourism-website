// import {  } from ""
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import "../styles/crew.css";
function Crew() {
	const { data: crew } = useFetch("crew");
	const [currentMember, setCurrentMember] = useState(null);
	const [memberIndex, setMemberIndex] = useState(0);
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
				if (memberIndex !== 0) {
					setMemberIndex(memberIndex - 1);
					setCurrentMember(crew[memberIndex - 1]);
				} else {
					setMemberIndex(crew.length - 1);
					setCurrentMember(crew[crew.length - 1]);
				}
			} else {
				if (memberIndex !== crew.length - 1) {
					setMemberIndex(memberIndex + 1);
					setCurrentMember(crew[memberIndex + 1]);
				} else {
					setMemberIndex(0);
					setCurrentMember(crew[0]);
				}
			}
		}
	};

	useEffect(() => {
		if (crew) {
			setCurrentMember(crew[0]);
		}
	}, [crew]);
	return (
		<div className="crew page">
			<Navbar />
			{currentMember && (
				<main>
					<p className="pageHeader stat">
						<span className="pageNumber">02</span> <span>MEET YOUR CREW</span>
					</p>
					<div
						className="crewBody d-flex"
						ref={swipeTargetRef}
						onTouchStart={handleSwipeStart}
						onTouchEnd={handleSwipeEnd}
					>
						<div className="crewTopLeft">
							<div className="details d-flex">
								<p className=" memberRole">
									{currentMember.role.toUpperCase()}
								</p>
								<h1 className="big-text memberName">
									{currentMember.name.toUpperCase()}
								</h1>
								<div className="memberBio d-flex justify-content-center">
									<p className="small-text-colored ">{currentMember.bio}</p>
								</div>
							</div>

							<div className="d-flex navContainer">
								<ul className="list-unstyled memberNav">
									{crew.map((c) => (
										<li
											key={c.name}
											onClick={() => {
												setCurrentMember(c);
												window.scrollTo(0, 0);
											}}
											className={currentMember === c ? " currentMember" : ""}
										></li>
									))}
								</ul>
							</div>
						</div>
						<div>
							<div className="memberImage">
								<img
									src={currentMember.images.webp}
									// className="animateImage"
									alt="member"
								/>
							</div>
						</div>
					</div>
				</main>
			)}
		</div>
	);
}

export default Crew;
