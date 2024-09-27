// import {  } from ""
import "../navbar.css";
function Home(props) {
	return (
		<div className="home page">
			<nav
				className="navbar navbar-expand-sm"
				aria-label="Offcanvas navbar small"
			>
				<div className="container-fluid">
					<div className="navbar-brand">
						<img src="/assets/shared/logo.svg" alt="Brand Logo" />
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar2"
						aria-controls="offcanvasNavbar2"
						aria-label="Toggle navigation"
						onClick={(e) => {
							e.target.classList.toggle("d-none");
						}}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar2"
						aria-labelledby="offcanvasNavbar2Label"
					>
						<div className="offcanvas-content">
							<div className="offcanvas-header">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
									onClick={() => {
										document
											.querySelector(".navbar-toggler-icon")
											.classList.toggle("d-none");
									}}
								></button>
							</div>
							<div className="offcanvas-body">
								<ul className="navbar-nav justify-content-end flex-grow-1">
									<li className="nav-item active">
										<span className="mr-2">00</span> Home
									</li>
									<li className="nav-item inactive">
										<span className="mr-2">01</span> Destination
									</li>
									<li className="nav-item inactive">
										<span className="mr-2">02</span> Crew
									</li>
									<li className="nav-item inactive">
										<span className="mr-2">03</span> Technology
									</li>
								</ul>
							</div>
						</div>
						<div className="background"></div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Home;
