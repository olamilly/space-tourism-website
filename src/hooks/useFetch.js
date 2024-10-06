// import {} from "";
import { useEffect, useState } from "react";

function useFetch(props) {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch("/data.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((d) => {
				switch (props) {
					case "destinations":
						setData(d["destinations"]);
						break;
					case "crew":
						setData(d["crew"]);
						break;
					case "technology":
						setData(d["technology"]);
						break;
					default:
						setData(d);
				}
			})
			.catch((error) => console.error("There's an error?", error));
	}, []);
	return { data };
}

export default useFetch;
