import styled from "styled-components";
import MediaQuery, {BREAKPOINTS} from "../../hooks/MediaQuery";
import profile from "../../images/프사.svg";
import menu from "../../images/menu.svg";
import close from "../../images/close_FILL0_wght700_GRAD0_opsz40.svg";
import {useState} from "react";
import useMediaQuery from "../../hooks/useMediaQuery";


const Container = styled.header`
	width: 100vw;
	height: 110px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	background: #ffffff;

	> .container-1580 {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		> .profile {
			width: 50px;
			cursor: pointer;
		}

		> ul {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			transition: 0.3s;

			> li {
				position: relative;
				color: #777777;
				font-weight: 800;
				cursor: pointer;
				transition: 0.3s;

				:not(:first-of-type) {
					margin-left: 30px;
				}

				::after {
					content: "";
					width: 0;
					height: 5px;
					position: absolute;
					bottom: -5px;
					left: calc((100% - 50px) / 2);
					margin: 0 auto;
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

		> .hamburger {
			display: none;
			float: right;
			cursor: pointer;
		}
	}

	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_MOBILE)}, ${MediaQuery(BREAKPOINTS.BREAKPOINT_TABLET)}`} {
		height: 70px;

		> .container-1580 {
			width: 100%;
			height: 100%;
			padding: 0 40px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			position: relative;
			background: #ffffff;

			> ul {
				width: 100vw;
				height: 40px;
				position: fixed;
				top: 30px;
				left: 0;
				background: #eeeeee;
				opacity: 0;
				pointer-events: none;
				z-index: -1;

				&.active {
					top: 70px;
					opacity: 1;
					pointer-events: auto;
				}
			}

			> .hamburger {
				display: block;
				float: right;
			}
		}
	}

	${`@media ${MediaQuery(BREAKPOINTS.BREAKPOINT_PC)}`} {
		> .container-1580 {
			width: 100vw;
			max-width: 1580px;
			margin: 0 auto;
			padding-left: 40px;

			> ul {
				margin-left: 60px;
			}
		}
	}
`;

const Header = ({sectionRefs}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const matchesPC = useMediaQuery(MediaQuery(BREAKPOINTS.BREAKPOINT_PC));
	
	const ScrollToSection = (index) => {
		const headerHeight = matchesPC ? 110 : 70;
		
		window.scrollTo({
			top: sectionRefs.current[index].current.getBoundingClientRect().top + window.scrollY - headerHeight,
			behavior: "smooth",
		})
	}
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	
	const toggleIsMenuOpen = () => {
		setIsMenuOpen(prevState => !prevState);
	}
	
	return (
		<Container>
			<div className={"container-1580"}>
				<img src={profile} alt={"방민"} className={"profile"} onClick={scrollToTop}/>
				<ul className={isMenuOpen ? "active" : ""}>
					<li onClick={() => ScrollToSection(0)}>About</li>
					<li onClick={() => ScrollToSection(1)}>Projects</li>
					<li onClick={() => ScrollToSection(2)}>Contact</li>
				</ul>
				<img src={isMenuOpen ? close : menu} alt={"메뉴"} className={"hamburger"} onClick={toggleIsMenuOpen}/>
			</div>
		</Container>
	)
};

export default Header;
