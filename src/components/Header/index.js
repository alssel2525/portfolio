import styled, {keyframes} from "styled-components";
import profile from "../../images/프사.svg";


const ProfileAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(5deg);
	}

	60% {
		transform: rotate(-2.5deg);
	}

	100% {
		transform: rotate(0deg);
	}
`;

const Container = styled.header`
	width: 100vw;
	height: 110px;
	padding-left: 175px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background: #ffffff;
	z-index: 1;

	> a {
		margin-right: 20px;

		> img {
			height: 50px;
			transform-origin: right bottom;
		}

		:hover > img {
			animation: ${ProfileAnimation} 1s linear infinite;
		}
	}


	> ul {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;

		> li {
			margin-left: 30px;
			position: relative;
			color: #777777;
			font-family: "GmarketSans", sans-serif;
			font-weight: 800;
			cursor: pointer;
			transition: 0.3s;

			::after {
				content: "";
				width: 0;
				height: 5px;
				position: absolute;
				bottom: -5px;
				left: calc((100% - 50px) / 2);
				margin: 0 auto;
				background: #e5e525;
				transition: 0.3s;
			}

			:hover {
				color: #333333;

				::after {
					width: 50px;
				}
			}
		}
	}
`;

const Header = (props) => {
	const ScrollToSection = (index) => {
		window.scrollTo({
			top: props.refs.current[index].current.getBoundingClientRect().top + window.scrollY - 110,
			behavior: "smooth",
		})
	}
	
	
	return (
		<Container>
			<a href={"/#"}><img src={profile} alt={"방민"}/></a>
			<ul>
				<li onClick={() => ScrollToSection(0)}>
					About
				</li>
				<li onClick={() => ScrollToSection(1)}>
					Projects
				</li>
				<li onClick={() => ScrollToSection(2)}>
					Contact
				</li>
			</ul>
		</Container>
	)
};

export default Header;
