import Visual from "./Visual";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = (props) => {
	return (
		<main>
			<Visual/>
			<About refs={props.refs.current[0]}/>
			<Projects refs={props.refs.current[1]}/>
			<Contact refs={props.refs.current[2]}/>
		</main>
	)
};

export default Main;
