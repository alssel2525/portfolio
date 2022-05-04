import {useEffect, useState} from "react";

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);
	
	const getMatches = (query) => {
		return window.matchMedia(query).matches;
	}
	
	useEffect(() => {
		const handleChange = () => {
			setMatches(getMatches(query));
		}
		
		handleChange();
		const MatchMedia = window.matchMedia(query);
		MatchMedia.addEventListener("change", handleChange);
		
		return () => {
			MatchMedia.removeEventListener("change", handleChange);
		}
	}, [query]);
	
	return matches;
};

export default useMediaQuery;
