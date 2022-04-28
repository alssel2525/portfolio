import styled from "styled-components";

const Container = styled.div`
	width: 1364px;
	margin: 110px 278px;
	position: relative;
	text-align: left;

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
`;

const Section = (props) => {
	return (
		<Container>
			<div className={"title"}>{props.title}</div>
			{props.children}
		</Container>
	)
};

export default Section;
