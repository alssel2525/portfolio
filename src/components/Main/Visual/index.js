import styled, {keyframes} from "styled-components";
import wing from "../../../images/wing.svg";
import arrow_down from "../../../images/arrow_down.png";

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
	display: inline-block;
	position: relative;
	background-color: #e5e525;
	overflow: hidden;

	.text_container {
		margin-top: 350px;
		margin-left: 278px;
		text-align: left;

		.main {
			font-size: 70px;
			font-weight: 800;
		}

		.sub {
			margin-top: 50px;
			font-size: 30px;
			line-height: calc(50 / 30);
			font-weight: 500;
		}
	}
	
	.bottom {
		width: 100%;
		height: 80px;
		position: absolute;
		left: 0;
		bottom: 0;
		
		> img {
			height: 60px;
			cursor: pointer;
			transition: 0.3s;
			
			:hover {
				transform: translateY(-10px);
			}
		}
	}

	::after {
		content: "";
		width: 600px;
		height: 600px;
		position: absolute;
		margin: auto 0;
		right: 280px;
		top: 0;
		bottom: 0;
		transform-origin: 0 50%;
		transition: 1s ease;
		background-image: url(${wing});
		background-repeat: no-repeat;
		animation: ${WingKeyframes} 1s ease 1 forwards;
	}
`;

const Visual = (props) => {
	const onArrowClick = () => {
		window.scrollTo({
			top: props.refs.current[0].current.getBoundingClientRect().top + window.scrollY - 110,
			behavior: "smooth",
		});
	}
	
	return (
		<Container>
			<div className={"text_container"}>
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
			<div className={"bottom"}>
				<img src={arrow_down} alt={"다음 페이지로 스크롤하기"} onClick={onArrowClick}/>
			</div>
		</Container>
	)
};

export default Visual;
