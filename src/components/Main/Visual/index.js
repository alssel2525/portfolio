import styled, {keyframes} from "styled-components";
import wing from "../../../images/wing.svg";
import arrow_down from "../../../images/arrow_down.png";
import MediaQuery, {BREAKPOINTS} from "../../../hooks/MediaQuery";
import {useEffect, useRef, useState} from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";


const Visual = ({nextSectionRef}) => {
	const textRef = useRef();
	const [wingLeft, setWingLeft] = useState();
	const [wingTop, setWingTop] = useState();
	const isPC = useMediaQuery(MediaQuery(BREAKPOINTS.BREAKPOINT_PC));
	
	const scrollToNextSection = () => {
		const headerHeight = isPC ? 110 : 70;
		
		window.scrollTo({
			top: nextSectionRef.current.getBoundingClientRect().top + window.scrollY - headerHeight,
			behavior: "smooth",
		});
	}
	
	useEffect(() => {
		if (textRef.current) {
			setWingLeft(textRef.current.getBoundingClientRect().right + 80);
			setWingTop(textRef.current.getBoundingClientRect().bottom + 40);
			
			document.body.onresize = () => {
				setWingLeft(textRef.current.getBoundingClientRect().right + 80);
				setWingTop(textRef.current.getBoundingClientRect().bottom + 40);
			}
		}
	}, []);
	
	return (
		<Container wingLeft={wingLeft} wingTop={wingTop}>
			<div className={"container-1320"}>
				<div className={"text-container"} ref={textRef}>
					<div className={"main"}>
						프론트엔드 개발자<br/>
						방민입니다.
					</div>
					<div className={"sub"}>
						서비스에 있어서 프론트엔드는 어떤 역할일까요?<br/>
						저는 사용자에게 날아가는 날개라고 생각합니다.<br/>
						어디든 날아갈 서비스를 위해 노력하겠습니다.
					</div>
				</div>
				<img src={arrow_down} alt={"다음 페이지로 스크롤"} onClick={scrollToNextSection} className={"arrow"}/>
			</div>
		</Container>
	)
};

export default Visual;


const WingKeyframes = keyframes`
	from {
		opacity: 0;
		transform: rotateZ(50deg);
	}

	to {
		opacity: 1;
		transform: rotateZ(10deg);
	}
`

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	text-align: center;
	background-color: #e5e525;

	> .container-1320 {
		width: 100vw;
		max-width: 1320px;
		height: 100vh;
		padding: 0 40px;
		display: inline-block;
		position: relative;

		> .text-container {
			> .main {
				font-size: 70px;
				font-weight: 800;
			}

			> .sub {
				margin-top: 50px;
				font-size: 30px;
				line-height: calc(50 / 30);
				font-weight: 500;
			}
		}

		> .arrow {
			height: 80px;
			margin: 0 auto;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 40px;
			cursor: pointer;
			transition: 0.3s;

			:hover {
				transform: translateY(-10px);
			}
		}
	}

	::after {
		content: "";
		width: 30vw;
		height: 30vw;
		position: absolute;
		margin: auto 0;
		left: calc(${props => props.wingLeft}px);
		top: 0;
		bottom: 0;
		transform-origin: 0 50%;
		transition: 1s ease transform;
		background-image: url(${wing});
		background-repeat: no-repeat;
		animation: ${WingKeyframes} 1s ease 1 forwards;
		pointer-events: none;
	}


	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}`} {
		> .container-1320 {
			padding: 150px 40px;
			box-sizing: border-box;

			> .text-container {
				> .main {
					font-size: 40px;
				}

				> .sub {
					font-size: 16px;
				}
			}

			> .arrow {
				height: 80px;
			}
		}

		::after {
			width: 40vw;
			height: 40vw;
			margin: auto;
			left: 0;
			right: 0;
			top: ${props => props.wingTop}px;
			bottom: 240px;
		}
	}

	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_TABLET)}`} {
		> .container-1320 {
			padding: 150px 40px;
			box-sizing: border-box;
		}
		
		::after {
			display: none;
		}
	}

	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_PC)}`} {
		> .container-1320 {
			> .text-container {
				width: max-content;
				margin-top: calc(110px + 20vh);
				text-align: left;
			}
		}
	}
`;
