import styled from "styled-components";
import profile from "../../images/프사.png";

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

	img {
		height: 50px;
		margin-right: 20px;
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
				left: 0;
				right: 0;
				margin: auto;
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

const Header = () => {
	return (
		<Container>
			<a href={"/#"}><img src={profile} alt={"방민"}/></a>
			<ul>
				<li>
					About
				</li>
				<li>
					Projects
				</li>
				<li>
					Contact
				</li>
			</ul>
		</Container>
	)
};

export default Header;
