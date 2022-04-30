import {useEffect, useRef, useState} from "react";

const useIntersectionObserver = (options) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef();
	
	useEffect(() => {
		const IO = new IntersectionObserver((entries) => {
			const [entry] = entries;
			setIsIntersecting(entry.isIntersecting);
		}, options);
		
		if (ref.current) IO.observe(ref.current);
		
		return () => {
			if (IO) IO.disconnect();
		}
	})
	
	return [ref, isIntersecting];
};

export default useIntersectionObserver;
