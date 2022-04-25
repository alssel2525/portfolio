import styled from "styled-components";
import Section from "../Section";

const Timeline = styled.div`
	width: 100%;
	margin: 170px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	position: relative;
	
	> div {
		position: relative;
		font-size: 20px;
		font-weight: 100;
		text-align: center;
		line-height: 2;
		letter-spacing: -0.02em;
		
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
			border: #e5e525 20px solid;
			border-radius: 50%;
			background-color: #ffffff;
			box-sizing: border-box;
		}
	}
	
	::before {
		content: "";
		width: 1050px;
		height: 35px;
		position: absolute;
		top: -100px;
		border-bottom: 2px dashed #333333;
	}
`;

const About = () => {
	return (
		<Section title={"About"}>
			<div style={{lineHeight: 1.6, fontSize: "24px", fontWeight: "100", letterSpacing: "-0.05em"}}>
				대학 생활 중 크게 2번의 공모전 활동에 참여했습니다.<br/>
				결과물을 시연하고 설명해보면서 느낀 점은 100마디 단어보다 서비스 그 자체의 디자인과 UI/UX가 더 많은 뜻을 전한다는 것이었습니다.<br/>
				사용자는 서비스와의 첫 만남부터 이용을 마치는 순간까지 프론트엔드와 소통합니다.<br/>
				프론트엔드가 없다면 서비스는 그 가치를 사용자에게 전할 수 없을 것입니다.<br/>
				저는 서비스의 가치를 온전히 전해줄 수 있는 프론트엔드 개발자가 되기 위해 노력하겠습니다.
			</div>
			<Timeline>
				<div>
					1999.06.17 미필 男<br/>
					<span>(보충역 산업기능요원 가능)</span>
				</div>
				<div>
					서울시립대학교<br/>
					컴퓨터과학부 졸업
				</div>
				<div>
					2019 S-School Project<br/>
					<span>참여</span>
				</div>
				<div>
					NET 챌린지 캠프 시즌 7<br/>
					<span>금상, 통신사 특별상</span>
				</div>
			</Timeline>
		</Section>
	)
};

export default About;
