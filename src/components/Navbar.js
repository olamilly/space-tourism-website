// import {  } from ""
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-sm"
			aria-label="Offcanvas navbar small"
		>
			<div className="container-fluid">
				<div className="navbar-brand">
					<NavLink to="/">
						<img src="/assets/shared/logo.svg" alt="Brand Logo" />
					</NavLink>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar2"
					aria-controls="offcanvasNavbar2"
					aria-label="Toggle navigation"
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
						<div className="desktopLine"></div>
						<div className="offcanvas-header">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body position-relative ">
							<ul className="navbar-nav justify-content-evenly align-items-center flex-grow-1 small-text">
								<li className="nav-item ">
									<NavLink to="/">
										<span className="mr-2 fw-700">00</span> HOME
									</NavLink>
								</li>
								<li className="nav-item ">
									<NavLink to="/destination">
										<span className="mr-2 fw-700">01</span> DESTINATION
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/crew">
										<span className="mr-2 fw-700">02</span> CREW
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/technology">
										<span className="mr-2 fw-700">03</span> TECHNOLOGY
									</NavLink>
								</li>
							</ul>
							<div className="demo-bg"></div>
						</div>
					</div>
					<div className="background"></div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
