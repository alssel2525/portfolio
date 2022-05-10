import styled, {css} from "styled-components";
import Section from "../Section";
import envelope from "../../../images/envelope.svg";
import phone from "../../../images/phone.svg";
import github from "../../../images/GitHub-Mark-32px.png";


const Contact = ({refs}) => {
	const openLink = (url) => {
		window.open(url, "_blank");
	}
	
	return (
		<Section title={"Contact"} refs={refs}>
			<ItemContainer>
				<Item onClick={() => openLink("mailto:alssel2525@naver.com")}>
					<img src={envelope} alt={"이메일"}/>
					alssel2525@naver.com
				</Item>
				<Item>
					<img src={phone} alt={"전화번호"}/>
					010-4854-1667
				</Item>
				<Item onClick={() => openLink("https://github.com/alssel2525")}>
					<img src={github} alt={"깃허브"}/>
					Github
				</Item>
			</ItemContainer>
		</Section>
	)
};

export default Contact;


const ItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	gap: 30px;
`

const Item = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 20px;
	font-weight: 500;
	transition: 0.3s;

	${props => {
		if (props.onClick) return css`
			cursor: pointer;
			border-bottom-color: #e5e525;
			border-bottom-width: 3px;
			border-bottom-style: solid;

			:hover {
				border-bottom-color: #2525e5;
				animation: none;
				transform: translateY(-5px);
			}
		`;
	}}
	
	> img {
		height: 20px;
		margin-right: 12px;
	}
`
