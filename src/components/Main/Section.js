import styled from "styled-components";
import MediaQuery, {BREAKPOINTS} from "../../hooks/MediaQuery";

const Container = styled.div`
	max-width: 1320px;
	margin: 110px auto;
	padding: 0 40px;
	position: relative;
	text-align: left;
	box-sizing: border-box;

	> .title {
		width: max-content;
		margin-bottom: 50px;
		position: relative;
		font-size: 40px;
		font-weight: 800;

		::after {
			content: "";
			width: 50px;
			height: 5px;
			position: absolute;
			bottom: -5px;
			left: 0;
			right: 0;
			margin: 0 auto;
			background: #e5e525;
		}
	}
	
	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}, ${MediaQuery(BREAKPOINTS.BREAKPOINT_TABLET)}`} {
		width: 100vw;
		padding: 40px;
		margin: 0;
		box-sizing: border-box;
	}
`;

const Section = (props) => {
	return (
		<Container ref={props.refs}>
			<div className={"title"}>{props.title}</div>
			{props.children}
		</Container>
	)
};

export default Section;
