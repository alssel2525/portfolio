import styled, {css} from "styled-components";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import MediaQuery, {BREAKPOINTS} from "../../../../hooks/MediaQuery";

const Container = styled.div`
	width: 100%;
	height: 450px;
	margin: 110px auto;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: flex-start;
	position: relative;
	box-sizing: border-box;
	
	transition: 0.3s opacity, 0.3s transform;
	opacity: 0;
	transform: translateY(20px);
	
	${props => props.isIntersecting === true && css`
		opacity: 1;
		transform: translateY(0);
	`}
	
	> img {
		width: 60%;
		height: 450px;
		object-fit: contain;
		box-shadow: #333333 0 0 10px;
	}

	> .content {
		height: 450px;
		margin-left: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		> .title {
			font-size: 30px;
			font-weight: 800;
			word-break: keep-all;
		}

		> .subtitle {
			margin-top: 40px;
			font-size: 24px;
			font-weight: 500;
			word-break: keep-all;
		}

		> .description {
			margin: auto 0;
			line-height: calc(40 / 24);
			font-size: 20px;
			font-weight: 100;
			word-break: keep-all;
		}

		> .buttons {
			display: flex;

			> :not(:first-child) {
				margin-left: 30px;
			}
		}
	}
	
	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}, ${MediaQuery(BREAKPOINTS.BREAKPOINT_TABLET)}`} {
		width: 100%;
		height: max-content;
		flex-direction: column;
		margin: unset;
		
		> img {
			width: 100%;
			height: auto;
		}

		> .content {
			height: max-content;
			margin: 30px 0 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;

			> .title {
				font-size: 20px;
			}

			> .subtitle {
				margin-top: 20px;
				font-size: 18px;
			}

			> .description {
				margin-top: 30px;
				line-height: 1.2;
				font-size: 16px;
			}

			> .buttons {
				margin-top: 30px;
				display: flex;

				> :not(:first-child) {
					margin-left: 30px;
				}
			}
		}
	}
	
	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_TABLET)}`} {
		> .content {
			> .title {
				font-size: 30px;
			}

			> .subtitle {
				font-size: 24px;
			}

			> .description {
				font-size: 20px;
			}
		}
	}
`;

const Project = ({children, isPC}) => {
	const [ref, isIntersecting] = useIntersectionObserver({
		threshold: 0.5,
		rootMargin: "100% 0px 0px 0px",
	});
	
	return (
		<Container ref={ref} isIntersecting={isPC ? isIntersecting : true} isPC={isPC}>
			{children}
		</Container>
	)
};

export default Project;
