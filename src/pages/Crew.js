// import {  } from ""
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";
import "../styles/crew.css";
function Crew() {
	const { data: crew } = useFetch("crew");
	const [currentMember, setCurrentMember] = useState(null);
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
					<div className="crewBody d-flex">
						<div className="crewTopLeft">
							<p className="pageHeader stat">
								<span className="pageNumber">02</span>{" "}
								<span>Meet Your Crew</span>
							</p>
							<div className="details d-flex">
								<p className=" memberRole">{currentMember.role}</p>
								<h1 className="big-text memberName">{currentMember.name}</h1>
							</div>
							<div className="memberBio d-flex justify-content-center">
								<p className="small-text-colored ">{currentMember.bio}</p>
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
