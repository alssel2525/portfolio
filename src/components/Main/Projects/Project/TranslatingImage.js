import {useEffect, useRef, useState} from "react";

const TranslatingImage = (props) => {
	const [boundingClientRect, setBoundingClientRect] = useState(null);
	const [rotation, setRotation] = useState([0, 0]);
	const countMouseEvent = useRef(0);
	const ref = useRef(null);
	
	const updateRotate = (event) => {
		if (countMouseEvent.current === 5) {
			setBoundingClientRect(ref.current.getBoundingClientRect());
			setRotation([
				(event.clientY - boundingClientRect.top - (boundingClientRect.height / 2)) / boundingClientRect.height * (-30),
				(event.clientX - boundingClientRect.left - (boundingClientRect.width / 2)) / boundingClientRect.width * (30),
			])
			countMouseEvent.current = 0;
		} else {
			countMouseEvent.current += 1;
		}
	};
	
	const resetRotate = () => {
		setRotation([0, 0]);
	};
	
	useEffect(() => {
		setBoundingClientRect(ref.current.getBoundingClientRect());
	}, []);
	
	return (
		<img {...props} alt={props.alt} ref={ref} onMouseMove={updateRotate} onMouseLeave={resetRotate}
			style={{
				transform: `perspective(2000px) rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg)`,
				transition: "0.3s",
			}}
		/>
	)
};

export default TranslatingImage;
