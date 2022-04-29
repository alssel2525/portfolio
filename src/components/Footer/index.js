import styled from "styled-components";

const Container = styled.footer`
    width: 100vw;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: #333333;
	color: #bbbbbb;
	font-size: 10px;
`;

const Footer = () => {
	return (
		<Container>
			Made By Bang Min
		</Container>
	)
};

export default Footer;
