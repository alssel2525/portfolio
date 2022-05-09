import Section from "../Section";
import Project from "./Project";
import PageButton from "./Project/PageButton";
import TranslatingImage from "./Project/TranslatingImage";
import djbm from "../../../images/djbm.jpg";
import portfolio from "../../../images/portfolio.jpg";
import styled, {css} from "styled-components";
import useMediaQuery from "../../../hooks/useMediaQuery";
import MediaQuery, {BREAKPOINTS} from "../../../hooks/MediaQuery";


const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;

	${props => {
		return !props.isPC && css`
			> *:not(:first-child) {
				margin-top: 120px;
			}
		`
	}}
`

const Projects = ({refs}) => {
	const isPC = useMediaQuery(MediaQuery(BREAKPOINTS.BREAKPOINT_PC));
	
	return (
		<Section title={"Projects"} refs={refs}>
			<ProjectContainer isPC={isPC}>
				<Project>
					<TranslatingImage src={djbm} alt={"대전 바이오메디컬 규제자유특구 클론 코딩"}/>
					<div className={"content"}>
						<div className={"title"}>대전 바이오메디컬 규제자유특구 홈페이지 클론 코딩</div>
						<div className={"subtitle"}>기존 사이트를 React로 구현하였습니다.</div>
						<div className={"description"}>
							React를 이용하여 SPA 구현<br/>
							styled-components로 컴포넌트별 디자인<br/>
							IntersectionObserver를 커스텀 hook으로 활용<br/>
							Github Pages로 배포
						</div>
						<div className={"buttons"}>
							<PageButton link={"https://alssel2525.github.io/djbm_clone/"}>Link</PageButton>
							<PageButton link={"https://github.com/alssel2525/djbm_clone"}
								type={"github"}>Github</PageButton>
						</div>
					</div>
				</Project>
				<Project>
					<TranslatingImage src={portfolio} alt={"포트폴리오"}/>
					<div className={"content"}>
						<div className={"title"}>포트폴리오</div>
						<div className={"subtitle"}>개인 포트폴리오 사이트입니다.</div>
						<div className={"description"}>
							styled-components로 컴포넌트별 디자인<br/>
							커서 위치에 따른 이미지 애니메이션 구현<br/>
							모바일 대응 반응형 웹 구현<br/>
							Github Pages로 배포
						</div>
						<div className={"buttons"}>
							<PageButton link={"https://alssel2525.github.io/portfolio/"}>Link</PageButton>
							<PageButton link={"https://github.com/alssel2525/portfolio"}
								type={"github"}>Github</PageButton>
						</div>
					</div>
				</Project>
			</ProjectContainer>
		</Section>
	)
};

export default Projects;
