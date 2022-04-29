import styled from "styled-components";

const Container = styled.div`
	width: 1364px;
	height: 450px;
	margin: 110px auto;
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: flex-start;
	position: relative;

	> img {
		width: 812px;
		height: 450px;
		object-fit: cover;
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
`;

const Project = (props) => {
	return (
		<Container>
			{props.children}
		</Container>
	)
};

export default Project;
