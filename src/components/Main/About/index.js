import styled, {css, keyframes} from "styled-components";
import Section from "../Section";
import MediaQuery, {BREAKPOINTS} from "../../../hooks/MediaQuery";


const About = ({refs}) => {
	return (
		<Section title={"About"} refs={refs}>
			<Text>
				사용자는 서비스와의 첫 만남부터 이용을 마치는 순간까지 프론트엔드와 소통합니다.<br/>
				프론트엔드가 없다면 서비스는 그 가치를 사용자에게 알릴 수 없을 것입니다.<br/>
				저는 <span>서비스의 가치</span>를 온전히 전해줄 수 있는 프론트엔드 개발자가 되기 위해 노력하겠습니다.
			</Text>
			<Timeline>
				<TimeEvent>
					1999.06.17 미필 男<br/>
					<span>(보충역 산업기능요원 가능)</span>
				</TimeEvent>
				<TimeEvent>
					2019 S-School Project<br/>
					<span>참여</span>
				</TimeEvent>
				<TimeEvent onClick={() => window.open("https://www.joongang.co.kr/article/23949185#home", "_blank")}>
					NET 챌린지 캠프 시즌 7<br/>
					<span>금상, 통신사 특별상</span>
				</TimeEvent>
				<TimeEvent>
					서울시립대학교<br/>
					컴퓨터과학부 졸업
				</TimeEvent>
			</Timeline>
		</Section>
	)
};

export default About;


const MovingUpDownKeyframes = keyframes`
	from {
	}

	50% {
		transform: translateY(-5px);
	}

	to {
	}
`

const TimeEvent = styled.div`
	position: relative;
	font-size: 20px;
	font-weight: 100;
	text-align: center;
	line-height: 2;
	letter-spacing: -0.02em;
	transition: 0.3s;

	> span {
		font-size: 16px;
	}

	::before {
		content: "";
		width: 70px;
		height: 70px;
		margin: 0 auto;
		position: absolute;
		top: -100px;
		left: 0;
		right: 0;
		border: 20px solid #e5e525;
		border-radius: 50%;
		background-color: #ffffff;
		box-sizing: border-box;
	}

	${props => {
		if (props.onClick) {
			return css`
				cursor: pointer;

				::before {
					animation: ${MovingUpDownKeyframes} 2s infinite ease forwards running;
					border: 20px solid transparent;
					background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(25deg, #6525e5, #2525e5);
					background-origin: border-box;
					background-clip: content-box, border-box;
				}

				:hover {
					transform: translateY(-5px);
					text-decoration: underline #2525e5 3px;

					::before {
						animation-play-state: paused;
					}
				}
			`
		}
	}}
	
	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}`} {
		font-size: 16px;

		> span {
			font-size: 12px;
		}

		:nth-child(2n) {
			margin-left: 50vw;

			::before {
				top: 0;
				bottom: 0;
				left: -50vw;
			}
		}

		:not(:nth-child(2n)) {
			margin-right: 50vw;

			::before {
				top: 0;
				bottom: 0;
				right: -50vw;
			}
		}
	}
`

const Timeline = styled.div`
	width: 100%;
	margin: 170px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	position: relative;

	::before {
		content: "";
		width: 75%;
		height: 35px;
		position: absolute;
		top: -100px;
		border-bottom: 2px dashed #333333;
	}

	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}`} {
		margin-top: 50px;
		flex-direction: column;
		align-items: center;

		> *:not(:first-child) {
			margin-top: 50px;
		}

		::before {
			width: 1px;
			height: 90%;
			top: 0;
			border-left: 2px dashed #333333;
			border-bottom: none;
		}
	}
`;

const Text = styled.div`
	display: block;
	line-height: 1.6;
	font-size: 24px;
	font-weight: 100;
	letter-spacing: -0.05em;

	> span {
		font-weight: 500;
		background: linear-gradient(20deg, #2525e5, #752575);
		-webkit-background-clip: text;
		color: transparent;
	}

	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}`} {
		font-size: 18px;
	}
`
