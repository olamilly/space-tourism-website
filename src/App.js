import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/destination" element={<Destination />}></Route>
				<Route path="/crew" element={<Crew />}></Route>
				<Route path="/technology" element={<Technology />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
