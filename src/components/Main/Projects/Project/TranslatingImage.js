import styled, {css} from "styled-components";
import {useEffect, useRef, useState} from "react";

const Container = styled.img`
	transition: 0.3s;

	${props => {
		if (props.mouseX !== null && props.mouseY !== null) {
			console.log(props.bcr, props.mouseX, props.mouseY);
			return css`
				transform: perspective(8000px) rotateX(${(props.mouseY - props.bcr.top - props.bcr.height / 2) / props.bcr.height * -30}deg) rotateY(${(props.mouseX - props.bcr.left - (props.bcr.width) / 2) / props.bcr.width * 30}deg);
			`
		}
	}}
`;

const TranslatingImage = (props) => {
	const [mouseX, setMouseX] = useState(null);
	const [mouseY, setMouseY] = useState(null);
	const [boundingClientRect, setBoundingClientRect] = useState(null);
	const ref = useRef(null);
	
	const onMouseMove = (event) => {
		setMouseX(event.clientX);
		setMouseY(event.clientY);
	}
	
	const onMouseLeave = () => {
		setMouseX(null);
		setMouseY(null);
	}
	
	useEffect(() => {
		setBoundingClientRect(ref.current.getBoundingClientRect());
	}, []);
	
	return (
		<Container {...props} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
			mouseX={mouseX} mouseY={mouseY} bcr={boundingClientRect}
			ref={ref}>
		</Container>
	)
};

export default TranslatingImage;
