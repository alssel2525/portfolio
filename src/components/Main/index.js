import Visual from "./Visual";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = ({sectionRefs}) => {
	return (
		<main>
			<Visual nextSectionRef={sectionRefs.current[0]}/>
			<About refs={sectionRefs.current[0]}/>
			<Projects refs={sectionRefs.current[1]}/>
			<Contact refs={sectionRefs.current[2]}/>
		</main>
	)
};

export default Main;
