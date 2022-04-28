import styled, {css} from "styled-components";
import github from "../../../../images/GitHub-Mark-Light-32px.png";
import globe from "../../../../images/globe.png";

const Container = styled.a`
	width: 150px;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 25px;
	font-size: 24px;
	font-weight: 500;
	transition: 0.3s;
	
	> img {
		width: 30px;
		height: 30px;
	}

	${props => props.type === "github" ?
			css`
				color: #ffffff;
				background-color: #000000;
			` :
			css`
				color: #333333;
				background-color: #e5e525;
			`
	}
	
	:hover {
		transform: translateY(-10px);
	}
`;

const PageButton = (props) => {
	return (
		<Container type={props.type} href={props.link} target={"_blank"}>
			<img src={props.type === "github" ? github : globe} alt={""}/>
			{props.children}
		</Container>
	)
};

export default PageButton;
