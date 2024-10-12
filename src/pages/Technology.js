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
						<span className="pageNumber">03</span> <span>SPACE LAUNCH 101</span>
					</p>
					<div className="technologyBody d-flex">
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
