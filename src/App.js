import Header from "./components/Header";
import Main from "./components/Main";
import {createRef, useRef} from "react";
import Footer from "./components/Footer";

function App() {
	const sectionRefs= useRef([createRef(), createRef(), createRef()]);
	
	return (
		<>
			<Header refs={sectionRefs}/>
			<Main refs={sectionRefs}/>
			<Footer/>
		</>
	);
}

export default App;
